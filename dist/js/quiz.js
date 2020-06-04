let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  }
];

window.onload = function () {
  show(0);
  sessionStorage.setItem("points", 0);
}


let question_count = 0;
let points = 0;

function next() {
  let user_ans = document.querySelector("li.option.active").innerHTML;
  console.log(user_ans);

  //check answer is right or not.
  if (user_ans == questions[question_count].answer) {
    //console.log("right answer");
    points += 10;
    sessionStorage.setItem("points", points);
  }
  // else {
  //   console.log("wrong answer");
  // }

  if (question_count == questions.length - 1) {
    sessionStorage.setItem("Time.min", formatted_min);
    sessionStorage.setItem("Time.sec", formatted_sec);
    clearInterval(mytime);
    location.href = "result.html"
  }

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  question.innerHTML =
    `<h2> Q${question_count+1}. ${questions[count].question} </h2>
        <ul class="option_group">
            <li class="option">${questions[count].options[0]}</li>
            <li class="option">${questions[count].options[1]}</li>
            <li class="option">${questions[count].options[2]}</li>
            <li class="option">${questions[count].options[3]}</li>
            
        </ul>`;

  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("active")) {
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    }
  }
}