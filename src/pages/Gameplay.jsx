// src/pages/Gameplay.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Gameplay.css'; // Will be significantly updated

// Import Gameplay Components
import QuestionCard from '../components/QuestionCard.jsx';
import AnswerChoice from '../components/AnswerChoice.jsx';
import ScoreBox from '../components/ScoreBox.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import HintButton from '../components/HintButton.jsx';
import FeedbackBox from '../components/FeedbackBox.jsx';
import InlineConnotationSelector from '../components/InlineConnotationSelector.jsx';

import { getQuestionsByLevel } from '../utils/sampleData.jsx';

function Gameplay() {
  const { levelId } = useParams();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionsInLevel, setQuestionsInLevel] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [answerChoicesStatus, setAnswerChoicesStatus] = useState({});
  const [finalAnswerSubmitted, setFinalAnswerSubmitted] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [blankConnotation, setBlankConnotation] = useState({
    selected: null,
    isCorrect: null,
    pointsAwarded: 0,
  });
  const [poeScoreLog, setPoeScoreLog] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // For initial load animation

  useEffect(() => {
    setIsLoading(true);
    const levelQuestions = getQuestionsByLevel(levelId);
    if (levelQuestions && levelQuestions.length > 0) {
      setQuestionsInLevel(levelQuestions);
      loadQuestion(levelQuestions[0], true); // Pass true for initial load
      setCurrentQuestionIndex(0);
      setScore(0);
    } else {
      navigate('/dashboard');
    }
  }, [levelId, navigate]);

  const loadQuestion = (questionData, initialLoad = false) => {
    if (!questionData || !questionData.choices || !Array.isArray(questionData.choices)) {
        setCurrentQuestion(null);
        setAnswerChoicesStatus({});
        setIsLoading(false); // Stop loading even if data is bad
        return;
    }

    // For smoother transitions between questions, fade out old, then fade in new
    if (!initialLoad) {
        // Add a class to fade out content, then update state after a delay
        const gameplayArea = document.querySelector('.gameplay-interactive-area');
        if (gameplayArea) gameplayArea.classList.add('content-fading-out');

        setTimeout(() => {
            setCurrentQuestion(questionData);
            initializeAnswerChoices(questionData);
            setFinalAnswerSubmitted(false);
            setFeedback({ type: '', message: '' }); // Clear feedback for new question
            setHintsUsed(0);
            setPoeScoreLog([]);
            setBlankConnotation({ selected: null, isCorrect: null, pointsAwarded: 0 });
            if (gameplayArea) gameplayArea.classList.remove('content-fading-out');
        }, 300); // Match CSS transition duration
    } else {
        setCurrentQuestion(questionData);
        initializeAnswerChoices(questionData);
        setFinalAnswerSubmitted(false);
        setFeedback({ type: '', message: '' });
        setHintsUsed(0);
        setPoeScoreLog([]);
        setBlankConnotation({ selected: null, isCorrect: null, pointsAwarded: 0 });
        setIsLoading(false); // Content is ready
    }
  };

  const initializeAnswerChoices = (question) => {
    if (!question || !question.choices || !Array.isArray(question.choices)) {
      setAnswerChoicesStatus({});
      return;
    }
    const initialStatus = {};
    question.choices.forEach(choice => {
      if (choice && typeof choice.id !== 'undefined') {
        initialStatus[choice.id] = 'undecided';
      }
    });
    setAnswerChoicesStatus(initialStatus);
  };

  const handleBlankConnotationSelected = (selectedOpt) => {
    if (!currentQuestion || !currentQuestion.connotationChallenge || blankConnotation.selected) return;
    const { correctConnotation, points } = currentQuestion.connotationChallenge;
    const isCorrect = selectedOpt.toLowerCase() === correctConnotation.toLowerCase();
    const pointsAwarded = isCorrect ? (points || 0) : 0;

    setBlankConnotation({ selected: selectedOpt, isCorrect: isCorrect, pointsAwarded: pointsAwarded });
    if (pointsAwarded !== 0) setScore(prevScore => prevScore + pointsAwarded);
    setFeedback({
      type: isCorrect ? 'success' : 'info',
      message: isCorrect ? `Correct! "+${pointsAwarded} pts for connotation.` : `Connotation noted. The correct was '${correctConnotation}'.`
    });
  };

  const handleAnswerChoiceAction = (choiceId, action) => {
    if (finalAnswerSubmitted || (currentQuestion.connotationChallenge && !blankConnotation.selected)) {
      if (currentQuestion.connotationChallenge && !blankConnotation.selected) {
        setFeedback({ type: 'warning', message: 'Select the blank\'s connotation first!' });
      }
      return;
    }
    const choice = currentQuestion.choices.find(c => c.id === choiceId);
    if (!choice) return;

    let potentialPoints = 0;
    let logEntryType = '';
    let newFeedbackMsg = '';
    let feedbackType = 'info';
    const updatedStatus = { ...answerChoicesStatus };

    if (action === 'eliminate') {
      updatedStatus[choiceId] = 'eliminated';
      if (!choice.isCorrect) {
        potentialPoints = currentQuestion.pointsForCorrectElimination || 10;
        logEntryType = 'correct_elimination';
        newFeedbackMsg = `Eliminated '${choice.text}'. (+${potentialPoints} potential)`;
        feedbackType = 'success';
      } else {
        potentialPoints = currentQuestion.penaltyForIncorrectElimination || -15;
        logEntryType = 'incorrect_elimination';
        newFeedbackMsg = `Oops! Eliminated '${choice.text}'. (${potentialPoints} potential)`;
        feedbackType = 'error';
      }
      setPoeScoreLog(prevLog => [...prevLog.filter(entry => entry.choiceId !== choiceId), { choiceId, points: potentialPoints, type: logEntryType }]);
    } else if (action === 'keep') {
      updatedStatus[choiceId] = 'kept';
      newFeedbackMsg = `'${choice.text}' kept for consideration.`;
      feedbackType = 'info';
      setPoeScoreLog(prevLog => prevLog.filter(entry => !(entry.choiceId === choiceId && entry.type.includes('elimination'))));
    }
    setAnswerChoicesStatus(updatedStatus);
    setFeedback({ type: feedbackType, message: newFeedbackMsg });
  };

  const handleSubmitFinalAnswer = () => {
    if (finalAnswerSubmitted || !currentQuestion || (currentQuestion.connotationChallenge && !blankConnotation.selected)) {
        if (currentQuestion.connotationChallenge && !blankConnotation.selected) {
            setFeedback({ type: 'warning', message: 'Select the blank\'s connotation first.' });
        }
      return;
    }
    setFinalAnswerSubmitted(true);

    let currentQuestionPoEScore = poeScoreLog.reduce((acc, entry) => acc + entry.points, 0);
    const selectedAnswerIds = Object.entries(answerChoicesStatus)
      .filter(([_, status]) => status === 'kept' || status === 'undecided')
      .map(([choiceId, _]) => choiceId);

    let finalSelectionPoints = 0;
    const allCorrectChoiceIdsInQuestion = currentQuestion.choices.filter(c => c.isCorrect).map(c => c.id);
    let isCompletelyCorrect = false;

    if (currentQuestion.type === 'SE') {
      const correctSelections = selectedAnswerIds.filter(id => allCorrectChoiceIdsInQuestion.includes(id));
      const incorrectSelections = selectedAnswerIds.filter(id => !allCorrectChoiceIdsInQuestion.includes(id));
      isCompletelyCorrect = correctSelections.length === allCorrectChoiceIdsInQuestion.length && incorrectSelections.length === 0 && selectedAnswerIds.length === allCorrectChoiceIdsInQuestion.length;
    } else {
      isCompletelyCorrect = allCorrectChoiceIdsInQuestion.length === selectedAnswerIds.length && allCorrectChoiceIdsInQuestion.every(id => selectedAnswerIds.includes(id));
    }

    finalSelectionPoints = isCompletelyCorrect
        ? (currentQuestion.pointsForCorrectFinalAnswer || 20)
        : (selectedAnswerIds.some(id => !allCorrectChoiceIdsInQuestion.includes(id)) ? (currentQuestion.penaltyForIncorrectFinalSelection !== undefined ? currentQuestion.penaltyForIncorrectFinalSelection : -10) : 0);

    let missedEliminationPenaltyTotal = 0;
    currentQuestion.choices.forEach(choice => {
      if (!choice.isCorrect && answerChoicesStatus[choice.id] !== 'eliminated') {
        missedEliminationPenaltyTotal += (currentQuestion.penaltyForMissedElimination || -5);
      }
    });

    const totalPointsThisQuestion = currentQuestionPoEScore + finalSelectionPoints + missedEliminationPenaltyTotal;
    setScore(prevScore => prevScore + totalPointsThisQuestion);

    const feedbackType = isCompletelyCorrect ? 'success' : 'error';
    let feedbackMsg = `PoE: ${currentQuestionPoEScore}pts. Final: ${finalSelectionPoints}pts. Missed Elims: ${missedEliminationPenaltyTotal}pts. Total: ${totalPointsThisQuestion}pts.`;
    feedbackMsg = isCompletelyCorrect ? `Excellent! ${feedbackMsg}` : `Review the explanation. ${feedbackMsg}`;
    setFeedback({ type: feedbackType, message: feedbackMsg });
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questionsInLevel.length) {
      setCurrentQuestionIndex(nextIndex);
      loadQuestion(questionsInLevel[nextIndex]);
    } else {
      const sessionSummaryData = { levelId, finalScore: score, totalQuestionsInLevel: questionsInLevel.length };
      navigate(`/summary/${levelId}`, { state: { sessionData: sessionSummaryData } });
    }
  };

  const handleUseHint = () => {
    if (!currentQuestion || finalAnswerSubmitted) return;
    const cost = currentQuestion.hintCost || 5;
    const maxHints = currentQuestion.maxHints || 3;
    if (hintsUsed < maxHints && score >= cost) {
      setScore(prevScore => prevScore - cost);
      setHintsUsed(prev => prev + 1);
      setFeedback({ type: 'info', message: `Hint used! (-${cost} pts). ${currentQuestion.hintKeyword || 'Focus on context.'}` });
    } else if (score < cost) {
      setFeedback({ type: 'warning', message: "Not enough points!" });
    } else {
      setFeedback({ type: 'warning', message: "No more hints." });
    }
  };

  // src/pages/Gameplay.jsx
// ... (imports and function component setup as before) ...

  if (isLoading || !currentQuestion || !currentQuestion.choices || currentQuestion.choices.length === 0) {
    return <div className="loading-game-fullscreen"><div className="spinner"></div>Loading Strategy Zone...</div>;
  }

  const progressPercent = questionsInLevel.length > 0 ? ((currentQuestionIndex + 1) / questionsInLevel.length) * 100 : 0;

  return (
    <div className={`gameplay-page-interactive ${finalAnswerSubmitted ? 'answers-revealed' : ''}`}>
      {/* This new wrapper will constrain the width and center the content */}
      <div className="gameplay-content-wrapper">
        <div className="gameplay-header-interactive">
          <ScoreBox score={score} />
          <ProgressBar
            progress={progressPercent}
            currentNum={currentQuestionIndex + 1}
            totalNum={questionsInLevel.length}
          />
        </div>

        <div className="gameplay-interactive-area">
          <QuestionCard
            passage={currentQuestion.passage}
            questionText={currentQuestion.questionText}
            questionType={currentQuestion.type}
          />

          {currentQuestion.connotationChallenge && !finalAnswerSubmitted && (
            <InlineConnotationSelector
              challengeData={currentQuestion.connotationChallenge}
              onConnotationSelected={handleBlankConnotationSelected}
              disabled={blankConnotation.selected !== null || finalAnswerSubmitted}
            />
          )}

          <div className="answer-choices-area-interactive">
            {currentQuestion.choices.map((choice) => {
              if (!choice || typeof choice.id === 'undefined') return null;
              return (
                <AnswerChoice
                  key={choice.id}
                  choice={choice}
                  status={answerChoicesStatus[choice.id] || 'undecided'}
                  onAction={(action) => handleAnswerChoiceAction(choice.id, action)}
                  disabled={finalAnswerSubmitted || (currentQuestion.connotationChallenge && !blankConnotation.selected)}
                  showConnotationTag={finalAnswerSubmitted}
                  isRevealed={finalAnswerSubmitted}
                />
              );
            })}
          </div>
        </div> {/* End of gameplay-interactive-area */}

        {feedback.message && (
          <FeedbackBox type={feedback.type} message={feedback.message} />
        )}

        <div className="gameplay-controls-interactive">
          <HintButton
            onUseHint={handleUseHint}
            disabled={!currentQuestion || finalAnswerSubmitted || hintsUsed >= (currentQuestion.maxHints || 3) || score < (currentQuestion.hintCost || 5)}
            hintCost={currentQuestion.hintCost || 5}
            hintsRemaining={(currentQuestion.maxHints || 3) - hintsUsed}
            maxHints={currentQuestion.maxHints || 3}
          />
          {!finalAnswerSubmitted ? (
            <button
              onClick={handleSubmitFinalAnswer}
              className="cta-button-gameplay submit-final-answer-interactive"
              disabled={currentQuestion.connotationChallenge && !blankConnotation.selected}
            >
              Lock In Answer
            </button>
          ) : (
            <button onClick={handleNextQuestion} className="cta-button-gameplay next-question-interactive">
              Next Question ➔
            </button>
          )}
        </div>

        {finalAnswerSubmitted && currentQuestion.detailedExplanation && (
          <div className="detailed-explanation-box-interactive">
            <h3>Deep Dive Explanation</h3>
            <p>{currentQuestion.detailedExplanation.overall}</p>
            <ul>
              {currentQuestion.choices.map(choice => (
                choice && choice.id && currentQuestion.detailedExplanation.choices[choice.id] ? (
                  <li key={choice.id} className={
                    choice.isCorrect ? 'correct-explanation' : 'incorrect-explanation'
                  }>
                    <strong>{choice.text}:</strong> {currentQuestion.detailedExplanation.choices[choice.id]}
                  </li>
                ) : null
              ))}
            </ul>
          </div>
        )}
      </div> {/* End of gameplay-content-wrapper */}
    </div>
  );
}

export default Gameplay;