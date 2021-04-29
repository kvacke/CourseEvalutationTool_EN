import { v4 as uuidv4 } from 'uuid';


// const lagom =         [
//     "Alldeles för låg",
//     "För låg",
//     "Lagom",
//     "För hög",
//     "Alldeles för hög"
// ]

const hurNöjd =
[
    "Very dissatisfied", "Somewhat dissatisfied", "Neither satisfied nor dissatisfied", "Somewhat satisfied", "Very satisfied"
]

const grader =
[
    "Not at all", "To a low degree", "To some degree", "To a high degree", "To a very high degree"
]

const wordList = [
    'stimulating',
    'problem solving',
    'analysing',
    'subject specialization',
    'intellectually challenging',
    'boring',
    'effective',
    'unnecessary',
    'aha-moment',
    'memorization oriented',
    'engaging',
    'too hard',
    'too easy',
    'interesting',
    'unfocused',
    'heavy',
    'practical application',
    'ineffective',
    'useful'
]

const wordList2 = [
    {word :'stimulating', selected: false},
    {word :'problem solving', selected: false},
    {word :'analysing', selected: false},
    {word :'subject specialization', selected: false},
    {word :'intellectually challenging', selected: false},
    {word :'boring', selected: false},
    {word :'effective', selected: false},
    {word :'unnecessary', selected: false},
    {word :'aha-moment', selected: false},
    {word :'memorization oriented', selected: false},
    {word :'engaging', selected: false},
    {word :'too hard', selected: false},
    {word :'too easy', selected: false},
    {word :'interesting', selected: false},
    {word :'unfocused', selected: false},
    {word :'heavy', selected: false},
    {word :'practical application', selected: false},
    {word :'ineffective', selected: false},
    {word :'useful', selected: false},
]

let agreeOptions = [
    "Disagree completely",
    "Disagree somewhat",
    "Neutral",
    "Agree somewhat",
    "Agree strongly"
]



let page0 = [
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'How satisfied are you with the course in general?',
        options: hurNöjd,
        category:'General'
    },
    {
        id : uuidv4(),
        inputType:'words',////////////////////////////////////////////
        value : wordList2,
        disabled : false,
        title:'Summarize your main impression of the course by marking the words that best describe the course for you.',
        options: wordList,
        category:'General'
    },
    {
        id : uuidv4(),
        inputType:'textAnswer',
        value : undefined,
        disabled : false,
        title:'This was especially good with the course:',
        options: agreeOptions,
        category:'General'
    },
    {
        id : uuidv4(),
        inputType:'textAnswer',
        value : undefined,
        disabled : false,
        title:'The course can be improved in the following ways:',
        options: agreeOptions,
        category:'General'
    },

]
let page1 = [
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'The administration during the course (schedule, exam registrations, etc.) has worked well.',
        options: agreeOptions,
        category:'Preconditions'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'I have generally known what is expected of me in this course in relation to the course objectives.',
        options: agreeOptions,
        category:'Preconditions'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'To what extent have you had difficulty following the course due to lack of prior knowledge?',
        options: grader,
        category:'Preconditions'
    },
]
let page2 = [

    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:"I believe that the course's requirement for work effort corresponds to the number of course credits.",
        options: agreeOptions,
        category:'During the course'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'The studies on the course have been intellectually challenging.',
        options: agreeOptions,
        category:'During the course'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'The teacher(s) have been good at explaining course content that has been difficult to understand in the course.',
        options: grader,
        category:'During the course'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'How satisfied are you with your own work effort on the course?',
        options: hurNöjd,
        category:'During the course'
    },

]
let page3 = [
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'To what extent have the studies within the course contributed to developing your ability to read and understand academic writing?',
        options: grader,
        category:'Results'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'To what extent have the studies within the course contributed to developing your ability to work in groups / collaborate with others?',
        options: grader,
        category:'Results'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'To what extent has the course built on what you have previously learned in the subject?',
        options: grader,
        category:'Results'
    },

]


let initialFormData = [page0,page1,page2,page3]

export default initialFormData;