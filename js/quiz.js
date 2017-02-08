/*
 * Simple quiz generator.
 *
 * @author YOUR NAME HERE
 */
// the possible questions in the quiz
var questions = [{
    question: 'What is 2*5?',
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
}, {
    question: 'What is 3*6?',
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
}, {
    question: 'What is 8*9?',
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
}, {
    question: 'What is 1*7?',
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
}, {
    question: 'What is 8*8?',
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
}];
var quiz = document.getElementById('quiz');


// saves user selection into global array
function recordChoice() {
    selections[questionCounter] = document.querySelector('input[name="answer"]:checked').val();
}

// returns a random element from a given list
function randomElement(list) {
    return list[Math.floor(Math.random()*list.length)];
}

// creates a list of the answer choices as radio inputs
function createRadios(questionData) {
    var radioList = document.createElement('ul');
    var input = '';
    for (var i = 0; i < questionData.choices.length; i++) {
        item = document.createElement('li');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questionData.choices[i];
        item.innerHTML = input;
        radioList.append(item);
    }
    return radioList;
}

// create a div that contains question and the possible answers
function createQuestionElement(questionData) {
    var qElement = document.createElement('div');
    qElement.id = 'question';
    var question = document.createElement('p');
    question.innerHTML = questionData.question;
    qElement.append(question);
    qElement.append(createRadios(questionData));
    return qElement;
}

// Displays next requested element
function displayQuestion() {
    quiz.appendChild(createQuestionElement(randomElement(questions)));
}


// display initial question
displayQuestion();
