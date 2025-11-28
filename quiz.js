async function getQuizData() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple");
        const data = await response.json();

      if(data.response_code !== 0) {
        throw new Error("Api not found")
      }
      if(data.results.length > 0) {
        data.results.forEach(({question, correct_answer, incorrect_answers}) => {
            console.log(`Question: ${question}, Answer: ${correct_answer}, Wrong Answers: ${incorrect_answers}`);
        });
    }

    }
    catch(error) {
        console.error(error)
    }
}

getQuizData();

// function checkAnswerChoice() {
//     const choices = document.querySelectorAll('input');

// }
