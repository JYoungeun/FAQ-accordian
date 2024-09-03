const buttonOne = document.getElementById('dropBtn1');
const buttonTwo = document.getElementById('dropBtn2');
const buttonThree = document.getElementById('dropBtn3');
const buttonFour = document.getElementById('dropBtn4')
const hiddenTextOne = document.getElementById('hidden1');
const hiddenTextTwo = document.getElementById('hidden2');
const hiddenTextThree = document.getElementById('hidden3');
const hiddenTextFour = document.getElementById('hidden4');

dropBtn1.addEventListener('click', () => {
  hiddenTextOne.classList.toggle('hidden');

  if (buttonOne.textContent === "-") {
    buttonOne.textContent = "+";
  } else {
    buttonOne.textContent = "-";
  };

  if (buttonOne.style.backgroundColor === "var(--Dark-purple)") {
    buttonOne.style.backgroundColor = "rgb(170, 18, 220)";
  } else {
    buttonOne.style.backgroundColor = "var(--Dark-purple)";
  }
});

dropBtn2.addEventListener('click', () => {
    hiddenTextTwo.classList.toggle('hidden');

    if (buttonTwo.textContent === "-") {
      buttonTwo.textContent = "+";
    } else {
      buttonTwo.textContent = "-";
    };

    if (buttonTwo.style.backgroundColor === "var(--Dark-purple)") {
      buttonTwo.style.backgroundColor = "rgb(170, 18, 220)";
    } else {
      buttonTwo.style.backgroundColor = "var(--Dark-purple)";
    }
});

dropBtn3.addEventListener('click', () => {
    hiddenTextThree.classList.toggle('hidden');

    if (buttonThree.textContent === "-") {
      buttonThree.textContent = "+";
    } else {
      buttonThree.textContent = "-";
    };

    if (buttonThree.style.backgroundColor === "var(--Dark-purple)") {
      buttonThree.style.backgroundColor = "rgb(170, 18, 220)";
    } else {
      buttonThree.style.backgroundColor = "var(--Dark-purple)";
    }
});

dropBtn4.addEventListener('click', () => {
    hiddenTextFour.classList.toggle('hidden');

    if (buttonFour.textContent === "-") {
      buttonFour.textContent = "+";
    } else {
      buttonFour.textContent = "-";
    };

    if (buttonFour.style.backgroundColor === "var(--Dark-purple)") {
      buttonFour.style.backgroundColor = "rgb(170, 18, 220)";
    } else {
      buttonFour.style.backgroundColor = "var(--Dark-purple)";
    }
});