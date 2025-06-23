// src/utils/sampleData.jsx

const sampleQuestions = [
  // LEVEL 1
  {
    id: 'q1',
    levelId: '1',
    type: 'TC1', // Text Completion 1-blank
    passage: "The scientist remained __BLANK__ in her research, despite numerous setbacks and criticisms from her peers.",
    questionText: "Select the word that best completes the sentence.",
    choices: [
      { id: 'q1c1', text: 'steadfast', isCorrect: true, connotation: 'positive', explanation: "Correct: 'Steadfast' means resolutely or dutifully firm and unwavering." },
      { id: 'q1c2', text: 'capricious', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Capricious' means given to sudden changes of mood or behavior." },
      { id: 'q1c3', text: 'indifferent', isCorrect: false, connotation: 'neutral/negative', explanation: "Incorrect: 'Indifferent' means having no particular interest or sympathy." },
      { id: 'q1c4', text: 'wavering', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Wavering' is the opposite of the required meaning." },
      { id: 'q1c5', text: 'lethargic', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Lethargic' means sluggish and apathetic, not fitting for active research." },
    ],
    pointsForCorrectAnswer: 20,
    penaltyForIncorrectFinalSelection: -10,
    pointsForCorrectElimination: 10,
    penaltyForIncorrectElimination: -15,
    penaltyForMissedElimination: -5,
    connotationChallenge: {
      type: 'identify_blank_connotation',
      contextSentence: "The scientist remained __BLANK__ in her research, despite numerous setbacks...",
      targetWord: '__BLANK__',
      options: ['Positive', 'Negative', 'Neutral'],
      correctConnotation: 'Positive',
      points: 5,
    },
    hintKeyword: "unwavering persistence",
    maxHints: 1,
    detailedExplanation: {
      overall: "The phrase 'despite numerous setbacks and criticisms' suggests the scientist showed perseverance. The blank requires a word with a positive connotation indicating firmness or determination.",
      choices: {
        q1c1: "'Steadfast' perfectly captures the idea of being firm and unwavering in the face of challenges.",
        q1c2: "'Capricious' suggests unpredictability, which is contrary to focused research.",
        q1c3: "'Indifferent' implies a lack of concern, not active persistence.",
        q1c4: "'Wavering' is an antonym of the required meaning.",
        q1c5: "'Lethargic' implies a lack of energy, unsuited for someone pushing through setbacks."
      }
    }
  },
  {
    id: 'q2',
    levelId: '1',
    type: 'SE', // Sentence Equivalence
    passage: "Her __BLANK__ nature made her an excellent negotiator, able to find common ground even in the most contentious disputes.",
    questionText: "Select the TWO words that best complete the sentence and would, if substituted for the blank, produce sentences alike in meaning.",
    choices: [
      { id: 'q2c1', text: 'conciliatory', isCorrect: true, connotation: 'positive', explanation: "Correct: 'Conciliatory' means intended to placate or pacify." },
      { id: 'q2c2', text: 'belligerent', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Belligerent' means hostile and aggressive." },
      { id: 'q2c3', text: 'irascible', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Irascible' means easily angered." },
      { id: 'q2c4', text: 'contentious', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Contentious' means causing or likely to cause an argument; controversial. This describes the disputes, not her nature for resolving them." },
      { id: 'q2c5', text: 'accommodating', isCorrect: true, connotation: 'positive', explanation: "Correct: 'Accommodating' means fitting in with someone's wishes or demands in a helpful way." },
      { id: 'q2c6', text: 'dogmatic', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Dogmatic' implies being arrogantly opinionated, which is bad for negotiation." },
    ],
    pointsForCorrectAnswer: 25,
    penaltyForIncorrectFinalSelection: -12, // Penalty if one or both selected are wrong, or if not exactly two correct are chosen.
    pointsForCorrectElimination: 8, // Slightly less for SE choices perhaps
    penaltyForIncorrectElimination: -10,
    penaltyForMissedElimination: -4,
    hintKeyword: "peace-making",
    maxHints: 2,
    detailedExplanation: {
      overall: "The sentence describes qualities of an excellent negotiator who finds common ground. This requires words that suggest a willingness to be flexible, understanding, and peace-making.",
      choices: {
        q2c1: "'Conciliatory' suggests an effort to make peace or reconcile.",
        q2c2: "'Belligerent' is aggressive and would prevent finding common ground.",
        q2c3: "'Irascible' or easily angered is not a quality of a good negotiator.",
        q2c4: "'Contentious' describes something causing argument, not a peacemaking nature.",
        q2c5: "'Accommodating' suggests a willingness to find a mutually agreeable solution, fitting for a negotiator.",
        q2c6: "'Dogmatic' implies rigid adherence to one's own beliefs, hindering compromise."
      }
    }
  },
  {
    id: 'q3',
    levelId: '1',
    type: 'TC1',
    passage: "Though the film was lauded by critics for its innovative cinematography, audiences found its narrative too __BLANK__ and largely stayed away.",
    questionText: "Select the word that best completes the sentence.",
    choices: [
      { id: 'q3c1', text: 'lucid', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Lucid' (clear) would likely attract audiences, not deter them." },
      { id: 'q3c2', text: 'engaging', isCorrect: false, connotation: 'positive', explanation: "Incorrect: An 'engaging' narrative would be a positive trait." },
      { id: 'q3c3', text: 'convoluted', isCorrect: true, connotation: 'negative', explanation: "Correct: 'Convoluted' (complex and difficult to follow) explains why audiences stayed away despite critical acclaim for cinematography." },
      { id: 'q3c4', text: 'sentimental', isCorrect: false, connotation: 'neutral/negative', explanation: "Incorrect: While some might dislike sentimentality, 'convoluted' better fits a narrative that drives audiences away." },
      { id: 'q3c5', text: 'predictable', isCorrect: false, connotation: 'negative', explanation: "Incorrect: A 'predictable' narrative might be boring, but 'convoluted' directly addresses difficulty in following it." },
    ],
    pointsForCorrectAnswer: 20,
    penaltyForIncorrectFinalSelection: -10,
    pointsForCorrectElimination: 10,
    penaltyForIncorrectElimination: -15,
    penaltyForMissedElimination: -5,
    connotationChallenge: {
      type: 'identify_blank_connotation',
      contextSentence: "...audiences found its narrative too __BLANK__ and largely stayed away.",
      targetWord: '__BLANK__',
      options: ['Positive', 'Negative', 'Neutral'],
      correctConnotation: 'Negative',
      points: 5,
    },
    hintKeyword: "complex plot",
    maxHints: 1,
    detailedExplanation: {
      overall: "The sentence sets up a contrast: critics liked one aspect (cinematography), but audiences disliked another (narrative). The word 'though' and the fact that audiences 'stayed away' indicate the blank needs a negative word to describe the narrative.",
      choices: {
        q3c1: "'Lucid' means clear, which is positive.",
        q3c2: "'Engaging' is positive.",
        q3c3: "'Convoluted' means overly complex, a negative trait for a narrative that would deter audiences.",
        q3c4: "'Sentimental' might be negative for some, but doesn't fit the context as well as 'convoluted'.",
        q3c5: "'Predictable' is negative, but a difficult-to-follow narrative is a stronger reason for audiences to avoid a film praised for visuals."
      }
    }
  },
  {
    id: 'q4',
    levelId: '1',
    type: 'TC2', // Text Completion 2-blanks
    passage: "The speaker, initially __BLANK__(i), gradually warmed to the audience, his remarks becoming more __BLANK__(ii) and engaging.",
    questionText: "For each blank, select one entry from the corresponding column of choices. Fill all blanks in the way that best completes the text.",
    choices: [ // Combine choices for TC2/TC3 or present them grouped by blank in UI
      // Blank (i)
      { id: 'q4c1', text: 'reserved', isCorrect: true, forBlank: 1, connotation: 'neutral/negative', explanation: "Correct for (i): 'Reserved' fits the initial state before warming up." },
      { id: 'q4c2', text: 'effusive', isCorrect: false, forBlank: 1, connotation: 'positive', explanation: "Incorrect for (i): 'Effusive' (enthusiastic) is the opposite of the initial state." },
      { id: 'q4c3', text: 'bombastic', isCorrect: false, forBlank: 1, connotation: 'negative', explanation: "Incorrect for (i): 'Bombastic' (pompous) doesn't fit the described change." },
      // Blank (ii)
      { id: 'q4c4', text: 'curt', isCorrect: false, forBlank: 2, connotation: 'negative', explanation: "Incorrect for (ii): 'Curt' (rudely brief) contradicts 'engaging'." },
      { id: 'q4c5', text: 'animated', isCorrect: true, forBlank: 2, connotation: 'positive', explanation: "Correct for (ii): 'Animated' (lively) fits with 'engaging' as he warmed up." },
      { id: 'q4c6', text: 'pedantic', isCorrect: false, forBlank: 2, connotation: 'negative', explanation: "Incorrect for (ii): 'Pedantic' (overly concerned with minor details) is unlikely to be engaging." }
    ],
    pointsForCorrectAnswer: 25, // Requires both blanks correct
    penaltyForIncorrectFinalSelection: -15,
    pointsForCorrectElimination: 7,
    penaltyForIncorrectElimination: -10,
    penaltyForMissedElimination: -3,
    connotationChallenge: { // Optional: Challenge for one of the blanks
      type: 'identify_blank_connotation',
      contextSentence: "The speaker, initially __BLANK__(i), gradually warmed to the audience...",
      targetWord: '__BLANK__(i)',
      options: ['Positive', 'Negative', 'Neutral'],
      correctConnotation: 'Neutral', // or slightly negative in contrast to later warmth
      points: 5,
    },
    hintKeyword: "gradual change",
    maxHints: 1,
    detailedExplanation: {
      overall: "The sentence describes a change in the speaker's demeanor. 'Initially' suggests a contrast with his later state. 'Gradually warmed' and 'more engaging' point to a shift from a less open to a more open style.",
      choices: {
        q4c1: "(i) 'Reserved' (shy, holding back) contrasts well with becoming more 'animated' and 'engaging'.",
        q4c2: "(i) 'Effusive' means gushy, the opposite of an initial state before warming up.",
        q4c3: "(i) 'Bombastic' means pompous or overblown.",
        q4c4: "(ii) 'Curt' means rudely brief, which is not engaging.",
        q4c5: "(ii) 'Animated' means full of life and excitement, fitting the description of becoming more engaging.",
        q4c6: "(ii) 'Pedantic' means overly academic or nitpicky, usually not engaging."
      }
    }
  },
  {
    id: 'q5',
    levelId: '1',
    type: 'SE',
    passage: "Despite the __BLANK__ of the terrain, the hikers were determined to reach the summit before nightfall.",
    questionText: "Select the TWO words that best complete the sentence and would, if substituted for the blank, produce sentences alike in meaning.",
    choices: [
      { id: 'q5c1', text: 'facility', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Facility' means ease, which is the opposite of what 'despite' implies." },
      { id: 'q5c2', text: 'asperity', isCorrect: true, connotation: 'negative', explanation: "Correct: 'Asperity' refers to harshness or roughness, fitting for challenging terrain." },
      { id: 'q5c3', text: 'accessibility', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Accessibility' implies ease of approach." },
      { id: 'q5c4', text: 'rigor', isCorrect: true, connotation: 'negative', explanation: "Correct: 'Rigor' can mean severity or harshness, similar to asperity in this context." },
      { id: 'q5c5', text: 'placidity', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Placidity' means calmness, unrelated to difficult terrain." },
      { id: 'q5c6', text: 'simplicity', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Simplicity' implies ease." },
    ],
    pointsForCorrectAnswer: 25, penaltyForIncorrectFinalSelection: -12, pointsForCorrectElimination: 8, penaltyForIncorrectElimination: -10, penaltyForMissedElimination: -4,
    hintKeyword: "difficult conditions", maxHints: 1,
    detailedExplanation: {
      overall: "The word 'despite' indicates that the blank describes a challenge or difficulty posed by the terrain. We need two words that mean something like 'harshness' or 'difficulty'.",
      choices: {
        q5c1: "'Facility' means ease.",
        q5c2: "'Asperity' means harshness of tone or manner, but can also apply to conditions, like roughness of terrain.",
        q5c3: "'Accessibility' means easily reached.",
        q5c4: "'Rigor' means demanding, difficult, or harsh conditions.",
        q5c5: "'Placidity' means calmness.",
        q5c6: "'Simplicity' means ease."
      }
    }
  },
  // Add 15 more questions below, varying types and levels
  {
    id: 'q6',
    levelId: '1',
    type: 'TC1',
    passage: "The artist was known for his __BLANK__ attention to detail, spending weeks on a single brushstroke.",
    questionText: "Select the word that best completes the sentence.",
    choices: [
        { id: 'q6c1', text: 'cursory', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Cursory' means hasty and therefore not thorough." },
        { id: 'q6c2', text: 'meticulous', isCorrect: true, connotation: 'positive', explanation: "Correct: 'Meticulous' means showing great attention to detail; very careful and precise." },
        { id: 'q6c3', text: 'superficial', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Superficial' means existing or occurring at or on the surface; not thorough." },
        { id: 'q6c4', text: 'erratic', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Erratic' means not even or regular in pattern or movement; unpredictable." },
        { id: 'q6c5', text: 'lazy', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Lazy' is the opposite of spending weeks on a detail." },
    ],
    pointsForCorrectAnswer: 20, penaltyForIncorrectFinalSelection: -10, pointsForCorrectElimination: 10, penaltyForIncorrectElimination: -15, penaltyForMissedElimination: -5,
    connotationChallenge: { type: 'identify_blank_connotation', contextSentence: "...his __BLANK__ attention to detail, spending weeks on a single brushstroke.", targetWord: '__BLANK__', options: ['Positive', 'Negative', 'Neutral'], correctConnotation: 'Positive', points: 5 },
    hintKeyword: "careful precision", maxHints: 1,
    detailedExplanation: {
      overall: "Spending weeks on a single brushstroke indicates extreme care and detail. The blank needs a word reflecting this.",
      choices: {
        q6c1: "'Cursory' is too hasty.",
        q6c2: "'Meticulous' fits perfectly, meaning very careful and precise.",
        q6c3: "'Superficial' means not thorough.",
        q6c4: "'Erratic' implies inconsistency.",
        q6c5: "'Lazy' contradicts the effort described."
      }
    }
  },
  {
    id: 'q7',
    levelId: '1',
    type: 'SE',
    passage: "The old manuscript was so __BLANK__ that scholars struggled to decipher its contents.",
    questionText: "Select the TWO words that best complete the sentence.",
    choices: [
        { id: 'q7c1', text: 'legible', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Legible' means clear enough to read." },
        { id: 'q7c2', text: 'obscure', isCorrect: true, connotation: 'negative', explanation: "Correct: 'Obscure' means not discovered or known about; uncertain or unclear." },
        { id: 'q7c3', text: 'transparent', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Transparent' means easy to perceive or detect." },
        { id: 'q7c4', text: 'cryptic', isCorrect: true, connotation: 'negative', explanation: "Correct: 'Cryptic' means having a meaning that is mysterious or obscure." },
        { id: 'q7c5', text: 'commonplace', isCorrect: false, connotation: 'neutral', explanation: "Incorrect: 'Commonplace' means not unusual; ordinary." },
        { id: 'q7c6', text: 'renowned', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Renowned' means known or talked about by many people." },
    ],
    pointsForCorrectAnswer: 25, penaltyForIncorrectFinalSelection: -12, pointsForCorrectElimination: 8, penaltyForIncorrectElimination: -10, penaltyForMissedElimination: -4,
    hintKeyword: "difficult to understand", maxHints: 1,
    detailedExplanation: {
      overall: "The fact that scholars struggled to decipher it indicates the manuscript was difficult to understand or unclear.",
      choices: {
        q7c1: "'Legible' is the opposite.",
        q7c2: "'Obscure' fits as it means unclear or difficult to understand.",
        q7c3: "'Transparent' means clear.",
        q7c4: "'Cryptic' means mysterious or obscure, fitting the context.",
        q7c5: "'Commonplace' means ordinary.",
        q7c6: "'Renowned' means famous."
      }
    }
  },
  {
    id: 'q8',
    levelId: '1',
    type: 'TC1',
    passage: "Her __BLANK__ demeanor during the crisis was reassuring to the team, even though she privately felt anxious.",
    questionText: "Select the word that best completes the sentence.",
    choices: [
        { id: 'q8c1', text: 'composed', isCorrect: true, connotation: 'positive', explanation: "Correct: 'Composed' means calm and self-possessed, which would be reassuring." },
        { id: 'q8c2', text: 'agitated', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Agitated' means anxious or nervous, the opposite of reassuring." },
        { id: 'q8c3', text: 'frivolous', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Frivolous' means not serious, which wouldn't be reassuring in a crisis." },
        { id: 'q8c4', text: 'despondent', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Despondent' means in low spirits, not reassuring." },
        { id: 'q8c5', text: 'histrionic', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Histrionic' means overly theatrical or melodramatic." },
    ],
    pointsForCorrectAnswer: 20, penaltyForIncorrectFinalSelection: -10, pointsForCorrectElimination: 10, penaltyForIncorrectElimination: -15, penaltyForMissedElimination: -5,
    connotationChallenge: { type: 'identify_blank_connotation', contextSentence: "Her __BLANK__ demeanor during the crisis was reassuring...", targetWord: '__BLANK__', options: ['Positive', 'Negative', 'Neutral'], correctConnotation: 'Positive', points: 5 },
    hintKeyword: "calm appearance", maxHints: 1,
    detailedExplanation: {
      overall: "The key is 'reassuring to the team'. This implies a calm, controlled outward appearance, despite inner feelings.",
      choices: {
        q8c1: "'Composed' means calm and in control, fitting the reassuring aspect.",
        q8c2: "'Agitated' is the opposite.",
        q8c3: "'Frivolous' (not serious) is inappropriate for a crisis.",
        q8c4: "'Despondent' (hopeless) would not be reassuring.",
        q8c5: "'Histrionic' (overly dramatic) would also not be reassuring."
      }
    }
  },
  {
    id: 'q9',
    levelId: '1',
    type: 'TC2',
    passage: "The novel's plot was admittedly __BLANK__(i), but its vivid characterizations and __BLANK__(ii) prose made it a compelling read.",
    questionText: "For each blank, select one entry from the corresponding column of choices.",
    choices: [
      { id: 'q9c1', text: 'original', isCorrect: false, forBlank: 1, connotation: 'positive', explanation: "Incorrect for (i): If original, the 'admittedly' might not fit as well with a positive contrast." },
      { id: 'q9c2', text: 'derivative', isCorrect: true, forBlank: 1, connotation: 'negative', explanation: "Correct for (i): 'Derivative' (unoriginal) sets up a contrast with its compelling qualities." },
      { id: 'q9c3', text: 'complex', isCorrect: false, forBlank: 1, connotation: 'neutral/negative', explanation: "Incorrect for (i): While possible, 'derivative' creates a stronger contrast with compelling." },
      { id: 'q9c4', text: 'mundane', isCorrect: false, forBlank: 2, connotation: 'negative', explanation: "Incorrect for (ii): 'Mundane' (dull) prose wouldn't make it compelling." },
      { id: 'q9c5', text: 'turgid', isCorrect: false, forBlank: 2, connotation: 'negative', explanation: "Incorrect for (ii): 'Turgid' (swollen, bombastic) prose is generally not compelling." },
      { id: 'q9c6', text: 'evocative', isCorrect: true, forBlank: 2, connotation: 'positive', explanation: "Correct for (ii): 'Evocative' (bringing strong images or feelings to mind) prose contributes to a compelling read." }
    ],
    pointsForCorrectAnswer: 25, penaltyForIncorrectFinalSelection: -15, pointsForCorrectElimination: 7, penaltyForIncorrectElimination: -10, penaltyForMissedElimination: -3,
    hintKeyword: "contrast: flaw vs strength", maxHints: 1,
    detailedExplanation: {
      overall: "'Admittedly' signals a concession about a potential flaw (i), while 'but' introduces strengths (ii) that make it compelling.",
      choices: {
        q9c1: "(i) 'Original' is a strength, less likely to be 'admittedly' so in this contrast.",
        q9c2: "(i) 'Derivative' means unoriginal, a common criticism, fitting 'admittedly'.",
        q9c3: "(i) 'Complex' could be a flaw, but 'derivative' is a more direct contrast to its other positive qualities.",
        q9c4: "(ii) 'Mundane' means dull.",
        q9c5: "(ii) 'Turgid' prose is pompous and difficult to read.",
        q9c6: "(ii) 'Evocative' prose, along with vivid characters, would make a book compelling."
      }
    }
  },
  {
    id: 'q10',
    levelId: '1',
    type: 'SE',
    passage: "The intern, eager to impress, offered a __BLANK__ of suggestions, far too many for the team to realistically consider.",
    questionText: "Select the TWO words that best complete the sentence.",
    choices: [
        { id: 'q10c1', text: 'paucity', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Paucity' means a lack or scarcity." },
        { id: 'q10c2', text: 'dearth', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Dearth' also means a lack." },
        { id: 'q10c3', text: 'plethora', isCorrect: true, connotation: 'neutral/positive', explanation: "Correct: 'Plethora' means an excess or overabundance." },
        { id: 'q10c4', text: 'modicum', isCorrect: false, connotation: 'neutral/negative', explanation: "Incorrect: 'Modicum' means a small amount." },
        { id: 'q10c5', text: 'scarcity', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Scarcity' means a lack." },
        { id: 'q10c6', text: 'surfeit', isCorrect: true, connotation: 'neutral/negative', explanation: "Correct: 'Surfeit' means an excessive amount of something." },
    ],
    pointsForCorrectAnswer: 25, penaltyForIncorrectFinalSelection: -12, pointsForCorrectElimination: 8, penaltyForIncorrectElimination: -10, penaltyForMissedElimination: -4,
    detailedExplanation: {
      overall: "The phrase 'far too many' indicates the intern offered an excessive number of suggestions.",
      choices: {
        q10c1: "'Paucity' means a lack.",
        q10c2: "'Dearth' means a lack.",
        q10c3: "'Plethora' means an excess, fitting the context.",
        q10c4: "'Modicum' means a small amount.",
        q10c5: "'Scarcity' means a lack.",
        q10c6: "'Surfeit' means an excessive amount, similar to plethora."
      }
    }
  },

  // LEVEL 2 Questions
  {
    id: 'q11',
    levelId: '2',
    type: 'TC1',
    passage: "Despite his __BLANK__ public image, the actor was known privately to be quite shy and introverted.",
    questionText: "Select the word that best completes the sentence.",
    choices: [
      { id: 'q11c1', text: 'gregarious', isCorrect: true, connotation: 'positive', explanation: "Correct: 'Gregarious' (sociable) contrasts with being shy and introverted." },
      { id: 'q11c2', text: 'reclusive', isCorrect: false, connotation: 'neutral/negative', explanation: "Incorrect: 'Reclusive' would match his private nature, not contrast with it." },
      { id: 'q11c3', text: 'modest', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Modest' doesn't provide a strong contrast to shy/introverted in this context." },
      { id: 'q11c4', text: 'arrogant', isCorrect: false, connotation: 'negative', explanation: "Incorrect: While a contrast, 'gregarious' better fits the common public image vs. private shyness." },
      { id: 'q11c5', text: 'taciturn', isCorrect: false, connotation: 'neutral/negative', explanation: "Incorrect: 'Taciturn' (reserved) is similar to introverted, not a contrast for a public image." },
    ],
    pointsForCorrectAnswer: 22, penaltyForIncorrectFinalSelection: -11, pointsForCorrectElimination: 11, penaltyForIncorrectElimination: -16, penaltyForMissedElimination: -6,
    connotationChallenge: { type: 'identify_blank_connotation', contextSentence: "Despite his __BLANK__ public image, the actor was known privately to be quite shy...", targetWord: '__BLANK__', options: ['Positive', 'Negative', 'Neutral'], correctConnotation: 'Positive', points: 6 },
    hintKeyword: "sociable facade", maxHints: 1,
    detailedExplanation: {
      overall: "The word 'despite' signals a contrast between the public image and his private nature (shy and introverted).",
      choices: {
        q11c1: "'Gregarious' (sociable, outgoing) provides the necessary contrast to shy and introverted.",
        q11c2: "'Reclusive' aligns with introverted, offering no contrast.",
        q11c3: "'Modest' is generally positive but doesn't create the specific contrast needed.",
        q11c4: "'Arrogant' is a possible contrast, but 'gregarious' is more directly opposite to 'shy'.",
        q11c5: "'Taciturn' (reserved) is too similar to his private nature."
      }
    }
  },
  {
    id: 'q12',
    levelId: '2',
    type: 'SE',
    passage: "The explorer's journey into the uncharted jungle was fraught with __BLANK__, yet she persevered.",
    questionText: "Select the TWO words that best complete the sentence.",
    choices: [
      { id: 'q12c1', text: 'comforts', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Comforts' contradicts 'fraught with'." },
      { id: 'q12c2', text: 'perils', isCorrect: true, connotation: 'negative', explanation: "Correct: 'Perils' means serious and immediate dangers." },
      { id: 'q12c3', text: 'amenities', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Amenities' are desirable or useful features." },
      { id: 'q12c4', text: 'hazards', isCorrect: true, connotation: 'negative', explanation: "Correct: 'Hazards' means dangers or risks." },
      { id: 'q12c5', text: 'serendipity', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Serendipity' means fortunate discoveries by chance." },
      { id: 'q12c6', text: 'tranquility', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Tranquility' means calmness." },
    ],
    pointsForCorrectAnswer: 28, penaltyForIncorrectFinalSelection: -14, pointsForCorrectElimination: 9, penaltyForIncorrectElimination: -12, penaltyForMissedElimination: -5,
    hintKeyword: "dangers", maxHints: 1,
    detailedExplanation: {
      overall: "'Fraught with' means filled with something undesirable. 'Yet she persevered' confirms the blank refers to difficulties.",
      choices: {
        q12c1: "'Comforts' is the opposite.",
        q12c2: "'Perils' (dangers) fits perfectly.",
        q12c3: "'Amenities' are positive features.",
        q12c4: "'Hazards' (dangers/risks) is synonymous with perils in this context.",
        q12c5: "'Serendipity' implies good fortune.",
        q12c6: "'Tranquility' means peace."
      }
    }
  },
  {
    id: 'q13',
    levelId: '2',
    type: 'TC1',
    passage: "The CEO's __BLANK__ decision to invest heavily in untested technology was met with skepticism by the board.",
    questionText: "Select the word that best completes the sentence.",
    choices: [
      { id: 'q13c1', text: 'prudent', isCorrect: false, connotation: 'positive', explanation: "Incorrect: A 'prudent' (careful, sensible) decision wouldn't necessarily cause skepticism." },
      { id: 'q13c2', text: 'audacious', isCorrect: true, connotation: 'neutral/negative', explanation: "Correct: 'Audacious' (bold, daring, potentially reckless) fits investing in untested tech and causing skepticism." },
      { id: 'q13c3', text: 'conventional', isCorrect: false, connotation: 'neutral', explanation: "Incorrect: 'Conventional' would likely not cause skepticism for being untested." },
      { id: 'q13c4', text: 'meticulous', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Meticulous' (careful) doesn't fit 'untested technology' causing skepticism." },
      { id: 'q13c5', text: 'hesitant', isCorrect: false, connotation: 'negative', explanation: "Incorrect: A 'hesitant' decision is the opposite of investing heavily." },
    ],
    pointsForCorrectAnswer: 22, penaltyForIncorrectFinalSelection: -11, pointsForCorrectElimination: 11, penaltyForIncorrectElimination: -16, penaltyForMissedElimination: -6,
    connotationChallenge: { type: 'identify_blank_connotation', contextSentence: "The CEO's __BLANK__ decision to invest heavily in untested technology was met with skepticism...", targetWord: '__BLANK__', options: ['Positive', 'Negative', 'Neutral'], correctConnotation: 'Negative', points: 6 }, // Negative from the board's perspective
    hintKeyword: "bold risk", maxHints: 1,
    detailedExplanation: {
      overall: "Investing in 'untested technology' and facing 'skepticism' suggests the decision was risky or bold.",
      choices: {
        q13c1: "'Prudent' means wise and careful.",
        q13c2: "'Audacious' means bold and daring, which can be seen negatively (reckless) when investing in something untested, leading to skepticism.",
        q13c3: "'Conventional' is the opposite of investing in untested tech.",
        q13c4: "'Meticulous' implies careful planning, less likely for untested tech skepticism.",
        q13c5: "'Hesitant' contradicts 'invest heavily'."
      }
    }
  },
  {
    id: 'q14',
    levelId: '2',
    type: 'TC3', // Text Completion 3-blanks
    passage: "The committee, initially __BLANK__(i) by the controversial proposal, found its merits increasingly __BLANK__(ii) after a thorough review, ultimately leading to its __BLANK__(iii).",
    questionText: "For each blank, select one entry from the corresponding column of choices.",
    choices: [
      // Blank (i)
      { id: 'q14c1', text: 'enthralled', isCorrect: false, forBlank: 1, explanation: "Incorrect (i): 'Enthralled' (captivated) doesn't fit if it's controversial initially." },
      { id: 'q14c2', text: 'perturbed', isCorrect: true, forBlank: 1, explanation: "Correct (i): 'Perturbed' (unsettled, anxious) fits being initially troubled by a controversial proposal." },
      { id: 'q14c3', text: 'indifferent', isCorrect: false, forBlank: 1, explanation: "Incorrect (i): 'Indifferent' (unconcerned) doesn't fit a strong reaction to 'controversial'." },
      // Blank (ii)
      { id: 'q14c4', text: 'dubious', isCorrect: false, forBlank: 2, explanation: "Incorrect (ii): 'Dubious' (doubtful) contradicts finding merits after review." },
      { id: 'q14c5', text: 'negligible', isCorrect: false, forBlank: 2, explanation: "Incorrect (ii): 'Negligible' (insignificant) merits wouldn't lead to approval." },
      { id: 'q14c6', text: 'apparent', isCorrect: true, forBlank: 2, explanation: "Correct (ii): 'Apparent' (clear, obvious) fits finding merits after review." },
      // Blank (iii)
      { id: 'q14c7', text: 'rejection', isCorrect: false, forBlank: 3, explanation: "Incorrect (iii): If merits became apparent, rejection is unlikely." },
      { id: 'q14c8', text: 'endorsement', isCorrect: true, forBlank: 3, explanation: "Correct (iii): 'Endorsement' (approval) follows finding merits." },
      { id: 'q14c9', text: 'modification', isCorrect: false, forBlank: 3, explanation: "Incorrect (iii): While possible, 'endorsement' is a stronger outcome of merits becoming apparent." }
    ],
    pointsForCorrectAnswer: 30, penaltyForIncorrectFinalSelection: -18, pointsForCorrectElimination: 6, penaltyForIncorrectElimination: -9, penaltyForMissedElimination: -3,
    hintKeyword: "initial doubt to approval", maxHints: 2,
    detailedExplanation: {
      overall: "The sentence shows a progression: initial negative reaction to a controversial proposal, then finding its good points, leading to a positive final action.",
      choices: {
        q14c1: "(i) 'Enthralled' is too positive for an initial reaction to 'controversial'.",
        q14c2: "(i) 'Perturbed' (unsettled) fits an initial negative reaction.",
        q14c3: "(i) 'Indifferent' means unconcerned.",
        q14c4: "(ii) 'Dubious' merits would not lead to approval.",
        q14c5: "(ii) 'Negligible' merits are insignificant.",
        q14c6: "(ii) 'Apparent' merits (clear, obvious) would lead to a positive outcome.",
        q14c7: "(iii) 'Rejection' contradicts the idea of merits becoming apparent.",
        q14c8: "(iii) 'Endorsement' (approval) is the logical outcome of finding merits.",
        q14c9: "(iii) 'Modification' is possible but 'endorsement' is more direct."
      }
    }
  },
  {
    id: 'q15',
    levelId: '2',
    type: 'SE',
    passage: "The __BLANK__ of the ancient ruins was astounding, with intricate carvings and massive structures still standing.",
    questionText: "Select the TWO words that best complete the sentence.",
    choices: [
      { id: 'q15c1', text: 'grandeur', isCorrect: true, connotation: 'positive', explanation: "Correct: 'Grandeur' means splendor and impressiveness." },
      { id: 'q15c2', text: 'squalor', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Squalor' means filth and misery." },
      { id: 'q15c3', text: 'magnificence', isCorrect: true, connotation: 'positive', explanation: "Correct: 'Magnificence' means impressiveness or stateliness." },
      { id: 'q15c4', text: 'fragility', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Fragility' means easily broken." },
      { id: 'q15c5', text: 'obscurity', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Obscurity' means unknown or unclear." },
      { id: 'q15c6', text: 'minuteness', isCorrect: false, connotation: 'neutral/negative', explanation: "Incorrect: 'Minuteness' means smallness." },
    ],
    pointsForCorrectAnswer: 28, penaltyForIncorrectFinalSelection: -14, pointsForCorrectElimination: 9, penaltyForIncorrectElimination: -12, penaltyForMissedElimination: -5,
    detailedExplanation: {
      overall: "The description 'intricate carvings and massive structures' points to something impressive and grand about the ruins.",
      choices: {
        q15c1: "'Grandeur' fits the impressive nature of the ruins.",
        q15c2: "'Squalor' is the opposite.",
        q15c3: "'Magnificence' is synonymous with grandeur here.",
        q15c4: "'Fragility' contradicts 'still standing massive structures'.",
        q15c5: "'Obscurity' means unknown.",
        q15c6: "'Minuteness' means smallness."
      }
    }
  },
  // Add 5 more questions for Level 2 or mix them up
  {
    id: 'q16',
    levelId: '2',
    type: 'TC1',
    passage: "The professor was admired for her ability to explain __BLANK__ concepts in a way that was accessible to all students.",
    questionText: "Select the word that best completes the sentence.",
    choices: [
      { id: 'q16c1', text: 'esoteric', isCorrect: true, connotation: 'neutral/negative', explanation: "Correct: 'Esoteric' concepts are those understood by only a small number of people with specialized knowledge." },
      { id: 'q16c2', text: 'mundane', isCorrect: false, connotation: 'negative', explanation: "Incorrect: Explaining 'mundane' (dull, ordinary) concepts isn't usually a mark of admiration." },
      { id: 'q16c3', text: 'superficial', isCorrect: false, connotation: 'negative', explanation: "Incorrect: Explaining 'superficial' concepts isn't particularly admirable." },
      { id: 'q16c4', text: 'erroneous', isCorrect: false, connotation: 'negative', explanation: "Incorrect: Explaining 'erroneous' (wrong) concepts well isn't the point here." },
      { id: 'q16c5', text: 'simplistic', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Simplistic' concepts wouldn't need much skill to make accessible." }
    ],
    pointsForCorrectAnswer: 22, penaltyForIncorrectFinalSelection: -11, pointsForCorrectElimination: 11, penaltyForIncorrectElimination: -16, penaltyForMissedElimination: -6,
    connotationChallenge: { type: 'identify_blank_connotation', contextSentence: "...explain __BLANK__ concepts in a way that was accessible...", targetWord: '__BLANK__', options: ['Positive', 'Negative', 'Difficult-to-access'], correctConnotation: 'Difficult-to-access', points: 6 },
    hintKeyword: "complex ideas", maxHints: 1,
    detailedExplanation: {
      overall: "The professor is admired for making something 'accessible'. This implies the concepts themselves were initially *not* easily accessible or were complex.",
      choices: {
        q16c1: "'Esoteric' means intended for or likely to be understood by only a small number of people with a specialized knowledge or interest, fitting the context perfectly.",
        q16c2: "'Mundane' means dull or ordinary.",
        q16c3: "'Superficial' means not thorough or deep.",
        q16c4: "'Erroneous' means wrong.",
        q16c5: "'Simplistic' means too simple, not complex."
      }
    }
  },
  {
    id: 'q17',
    levelId: '2',
    type: 'SE',
    passage: "The diplomat's __BLANK__ handling of the delicate negotiations averted a major international crisis.",
    questionText: "Select the TWO words that best complete the sentence.",
    choices: [
      { id: 'q17c1', text: 'clumsy', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Clumsy' handling would not avert a crisis." },
      { id: 'q17c2', text: 'adroit', isCorrect: true, connotation: 'positive', explanation: "Correct: 'Adroit' means clever or skillful." },
      { id: 'q17c3', text: 'maladroit', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Maladroit' means clumsy or inept." },
      { id: 'q17c4', text: 'inept', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Inept' means having or showing no skill." },
      { id: 'q17c5', text: 'dexterous', isCorrect: true, connotation: 'positive', explanation: "Correct: 'Dexterous' means showing or having skill, especially with the hands, but can apply to mental skill too." },
      { id: 'q17c6', text: 'brusque', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Brusque' (abrupt or offhand) handling might worsen a crisis." },
    ],
    pointsForCorrectAnswer: 28, penaltyForIncorrectFinalSelection: -14, pointsForCorrectElimination: 9, penaltyForIncorrectElimination: -12, penaltyForMissedElimination: -5,
    detailedExplanation: {
      overall: "Averting a crisis through delicate negotiations implies skillful handling.",
      choices: {
        q17c1: "'Clumsy' is the opposite.",
        q17c2: "'Adroit' means skillful.",
        q17c3: "'Maladroit' means clumsy.",
        q17c4: "'Inept' means unskilled.",
        q17c5: "'Dexterous' implies skill and deftness, fitting for a diplomat.",
        q17c6: "'Brusque' (abrupt) would be poor diplomacy."
      }
    }
  },
  {
    id: 'q18',
    levelId: '2',
    type: 'TC1',
    passage: "Given the __BLANK__ evidence, the jury had no choice but to acquit the defendant.",
    questionText: "Select the word that best completes the sentence.",
    choices: [
      { id: 'q18c1', text: 'incontrovertible', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Incontrovertible' (indisputable) evidence of guilt would lead to conviction, not acquittal." },
      { id: 'q18c2', text: 'scanty', isCorrect: true, connotation: 'negative', explanation: "Correct: 'Scanty' (meager, insufficient) evidence would lead to an acquittal." },
      { id: 'q18c3', text: 'damning', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Damning' evidence would lead to conviction." },
      { id: 'q18c4', text: 'copious', isCorrect: false, connotation: 'positive', explanation: "Incorrect: 'Copious' (abundant) evidence, if incriminating, would lead to conviction." },
      { id: 'q18c5', text: 'circumstantial', isCorrect: false, connotation: 'neutral', explanation: "Incorrect: While circumstantial evidence can be weak, 'scanty' more directly addresses the lack of sufficient proof for conviction." }
    ],
    pointsForCorrectAnswer: 22, penaltyForIncorrectFinalSelection: -11, pointsForCorrectElimination: 11, penaltyForIncorrectElimination: -16, penaltyForMissedElimination: -6,
    connotationChallenge: { type: 'identify_blank_connotation', contextSentence: "Given the __BLANK__ evidence, the jury had no choice but to acquit...", targetWord: '__BLANK__', options: ['Strong', 'Weak', 'Neutral'], correctConnotation: 'Weak', points: 6 },
    hintKeyword: "insufficient proof", maxHints: 1,
    detailedExplanation: {
      overall: "An acquittal means the defendant was found not guilty. This usually happens due to a lack of sufficient evidence.",
      choices: {
        q18c1: "'Incontrovertible' means undeniable, usually implying strong evidence.",
        q18c2: "'Scanty' means insufficient or meager, fitting for an acquittal.",
        q18c3: "'Damning' evidence is highly incriminating.",
        q18c4: "'Copious' means abundant.",
        q18c5: "'Circumstantial' evidence is indirect. While it can lead to acquittal if weak, 'scanty' better describes the quantity/quality leading to 'no choice but to acquit'."
      }
    }
  },
  {
    id: 'q19',
    levelId: '2',
    type: 'TC2',
    passage: "The intern was praised for her __BLANK__(i), quickly learning new tasks and adapting to the fast-paced environment, a pleasant contrast to her predecessor's __BLANK__(ii).",
    questionText: "For each blank, select one entry from the corresponding column of choices.",
    choices: [
      { id: 'q19c1', text: 'apathy', isCorrect: false, forBlank: 1, explanation: "Incorrect (i): 'Apathy' (lack of interest) wouldn't be praised." },
      { id: 'q19c2', text: 'alacrity', isCorrect: true, forBlank: 1, explanation: "Correct (i): 'Alacrity' (brisk and cheerful readiness) fits quick learning and adaptation." },
      { id: 'q19c3', text: 'reluctance', isCorrect: false, forBlank: 1, explanation: "Incorrect (i): 'Reluctance' is unwillingness." },
      { id: 'q19c4', text: 'diligence', isCorrect: false, forBlank: 2, explanation: "Incorrect (ii): 'Diligence' (hard work) in the predecessor wouldn't be a contrast to praise." },
      { id: 'q19c5', text: 'lethargy', isCorrect: true, forBlank: 2, explanation: "Correct (ii): 'Lethargy' (lack of energy, sluggishness) in the predecessor contrasts with the intern's alacrity." },
      { id: 'q19c6', text: 'expertise', isCorrect: false, forBlank: 2, explanation: "Incorrect (ii): 'Expertise' in the predecessor doesn't provide the intended negative contrast." }
    ],
    pointsForCorrectAnswer: 26, penaltyForIncorrectFinalSelection: -16, pointsForCorrectElimination: 7, penaltyForIncorrectElimination: -10, penaltyForMissedElimination: -4,
    hintKeyword: "quick learner vs slow", maxHints: 1,
    detailedExplanation: {
      overall: "The sentence contrasts the current intern (praised for positive traits) with her predecessor (who presumably lacked these traits).",
      choices: {
        q19c1: "(i) 'Apathy' is lack of interest.",
        q19c2: "(i) 'Alacrity' means brisk eagerness, fitting someone praised for quick learning.",
        q19c3: "(i) 'Reluctance' means unwillingness.",
        q19c4: "(ii) 'Diligence' is a positive trait.",
        q19c5: "(ii) 'Lethargy' (sluggishness) provides a good contrast to the intern's alacrity and adaptation.",
        q19c6: "(ii) 'Expertise' doesn't fit the negative contrast needed."
      }
    }
  },
  {
    id: 'q20',
    levelId: '2',
    type: 'SE',
    passage: "The ancient philosopher's teachings, though centuries old, remain remarkably __BLANK__ to modern ethical dilemmas.",
    questionText: "Select the TWO words that best complete the sentence.",
    choices: [
      { id: 'q20c1', text: 'pertinent', isCorrect: true, connotation: 'positive', explanation: "Correct: 'Pertinent' means relevant or applicable." },
      { id: 'q20c2', text: 'anachronistic', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Anachronistic' means belonging to another time period, thus not applicable." },
      { id: 'q20c3', text: 'obsolete', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Obsolete' means out of date." },
      { id: 'q20c4', text: 'germane', isCorrect: true, connotation: 'positive', explanation: "Correct: 'Germane' means relevant to a subject under consideration." },
      { id: 'q20c5', text: 'superfluous', isCorrect: false, connotation: 'negative', explanation: "Incorrect: 'Superfluous' means unnecessary." },
      { id: 'q20c6', text: 'esoteric', isCorrect: false, connotation: 'neutral', explanation: "Incorrect: 'Esoteric' means understood by few, not necessarily relevant." },
    ],
    pointsForCorrectAnswer: 28, penaltyForIncorrectFinalSelection: -14, pointsForCorrectElimination: 9, penaltyForIncorrectElimination: -12, penaltyForMissedElimination: -5,
    detailedExplanation: {
      overall: "'Though centuries old' sets up a potential contrast, but 'remarkably' suggests the teachings are still applicable or relevant.",
      choices: {
        q20c1: "'Pertinent' means relevant.",
        q20c2: "'Anachronistic' means out of its proper time.",
        q20c3: "'Obsolete' means no longer produced or used; out of date.",
        q20c4: "'Germane' means relevant and fitting.",
        q20c5: "'Superfluous' means unnecessary.",
        q20c6: "'Esoteric' means understood by few, which doesn't directly mean relevant to modern dilemmas."
      }
    }
  }
];

// Function to get all questions for a specific level
export const getQuestionsByLevel = (levelId) => {
  return sampleQuestions.filter(q => q.levelId === String(levelId)); // Ensure levelId is compared as string if needed
};

// Function to get a specific question by its ID
export const getQuestionById = (questionId) => {
  return sampleQuestions.find(q => q.id === questionId);
};