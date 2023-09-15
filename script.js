//Starting the Quiz

clicked = () => {
  //variables

  const questions = document.querySelector(".hidden");
  const welcome = document.querySelector(".welcome");

  welcome.classList.add("hidden");
  questions.classList.remove("hidden");
};

//Keeping score

checkAnswers = () => {
  //Variables

  let counter = 0;
  const score = document.querySelector(".score-text");

  const question1 = document.querySelector('input[name="q1"]:checked');
  const question2 = document.querySelector('input[name="q2"]:checked');
  const question3 = document.querySelector('input[name="q3"]:checked');
  const question4 = document.querySelector('input[name="q4"]:checked');
  const question5 = document.querySelector('input[name="q5"]:checked');
  const question6 = document.querySelector('input[name="q6"]:checked');

  //keeping count

  if (question1 && question1.checked && question1.value === "d") {
    counter++;
  }

  if (question2 && question2.checked && question2.value === "a") {
    counter++;
  }

  if (question3 && question3.checked && question3.value === "a") {
    counter++;
  }

  if (question4 && question4.checked && question4.value === "a") {
    counter++;
  }

  if (question5 && question5.checked && question5.value === "d") {
    counter++;
  }

  if (question6 && question6.checked && question6.value === "a") {
    counter++;
  }

  score.textContent = `Score: ${counter}`;
};

//reseting

reset = () => {
  //variables

  const questions = document.querySelectorAll(".question");
  const score = document.querySelector(".score-text");

  //reseting the questions

  for (question of questions) {
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    for (radioButton of radioButtons) {
      radioButton.checked = false;
    }
  }

  // reseting the score
  score.textContent = "Score: 0";
};
