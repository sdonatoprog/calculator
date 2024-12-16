let errorState = false;

function addText(c) {
  if (errorState) {
    textElement.innerHTML = "";
    errorState = false;
  }
  textElement = document.querySelector("#text");
  if (textElement.innerHTML.length < 15) {
    textElement.innerHTML += c;
  }
}

function calculateResult() {
  textElement = document.querySelector("#text");
  try {
    let evaluation = math.evaluate(textElement.innerHTML);
    if (evaluation == undefined) {
      throw new Error();
    } else {
      textElement.innerHTML = evaluation;
    }
  } catch {
    errorState = true;
    textElement.innerHTML = "Invalid";
  }
}

function eraseAll() {
  textElement = document.querySelector("#text");
  textElement.innerHTML = "";
}
