var pos = 0,
  board,
  qus,
  choice,
  A,
  B,
  C,
  cor = 0;
var questions = [
  ["shortcut of copy", "CTRL+A", "CTRL+S", "CTRL+C", "C"],
  ["10+10", "20", "8", "55", "A"],
  ["100+250", "200", "800", "350", "C"],
  ["10+10", "20", "8", "55", "A"],
];
function DisplayQuestion() {
  board = document.getElementById("board");
  if (pos >= questions.length) {
    board.innerHTML = "<h2>you Got " + cor + " of " + questions.length + "<h2>";
    document.getElementById("status").innerHTML = "Quiz completed";
    pos = 0;
    cor = 0;
    return false;
  }
  document.getElementById("status").innerHTML =
    "Question " + (pos + 1) + " of " + questions.length;
  qus = questions[pos][0];
  A = questions[pos][1];
  B = questions[pos][2];
  C = questions[pos][3];
  board.innerHTML = "<h3>" + qus + "</h3>";
  board.innerHTML +=
    "<label><input type='radio' name='choices' value='A'/>" + A + "</label>";
  board.innerHTML +=
    "<label><input type='radio' name='choices' value='B'/>" + B + "</label>";
  board.innerHTML +=
    "<label><input type='radio' name='choices' value='C'/>" + C + "</label>";
  board.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer() {
  var choice;
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  if (choice == questions[pos][4]) {
    cor++;
  }
  pos++;
  DisplayQuestion();
}
