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

getQuizData().then(quizInfo => {
    console.log(quizInfo);
})

// function checkAnswerChoice() {
//     const choices = document.querySelectorAll('input');

// }
