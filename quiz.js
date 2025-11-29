async function getQuizData() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple");
        const data = await response.json();

      if(data.response_code !== 0) {
        throw new Error("Api not found")
      }
     return data.results;
    }

    catch(error) {
        console.error(error)
    }
}

const quizQuestion = document.querySelector(".quiz-question");
const choices = document.querySelectorAll('input');
const choiceLabel = document.querySelectorAll("label");
getQuizData().then(quizInfo => {
    for(const {question, correct_answer, incorrect_answers} of quizInfo) {
        quizQuestion.textContent = question;
    }
})

// function checkAnswerChoice() {
//     

// }
