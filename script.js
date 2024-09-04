const buttonOne = document.getElementById('buttonOne');
const buttonOneAlt = document.getElementById('buttonOneAlt');
const buttonTwo = document.getElementById('buttonTwo');
const buttonTwoAlt = document.getElementById('buttonTwoAlt');
const buttonThree = document.getElementById('buttonThree');
const buttonThreeAlt = document.getElementById('buttonThreeAlt');
const buttonFour = document.getElementById('buttonFour');
const buttonFourAlt = document.getElementById('buttonFourAlt');
const hiddenTextOne = document.getElementById('hidden1');
const hiddenTextTwo = document.getElementById('hidden2');
const hiddenTextThree = document.getElementById('hidden3');
const hiddenTextFour = document.getElementById('hidden4');

buttonOne.addEventListener('click', () => {
  hiddenTextOne.classList.toggle('hidden');
  
  buttonOne.classList.add('hidden');
  buttonOneAlt.classList.remove('hidden');
});

buttonOneAlt.addEventListener('click', () => {
  hiddenTextOne.classList.toggle('hidden');

  buttonOne.classList.remove('hidden');
  buttonOneAlt.classList.add('hidden');
})

buttonTwo.addEventListener('click', () => {
  hiddenTextTwo.classList.toggle('hidden');

  buttonTwo.classList.add('hidden');
  buttonTwoAlt.classList.remove('hidden');
});

buttonTwoAlt.addEventListener('click', () => {
  hiddenTextTwo.classList.toggle('hidden');

  buttonTwo.classList.remove('hidden');
  buttonTwoAlt.classList.add('hidden');
})

buttonThree.addEventListener('click', () => {
  hiddenTextThree.classList.toggle('hidden');

  buttonThree.classList.add('hidden');
  buttonThreeAlt.classList.remove('hidden');
});

buttonThreeAlt.addEventListener('click', () => {
  hiddenTextThree.classList.toggle('hidden');

  buttonThree.classList.remove('hidden');
  buttonThreeAlt.classList.add('hidden');
})

buttonFour.addEventListener('click', () => {
  hiddenTextFour.classList.toggle('hidden');

  buttonFour.classList.add('hidden');
  buttonFourAlt.classList.remove('hidden');
});

buttonFourAlt.addEventListener('click', () => {
  hiddenTextFour.classList.toggle('hidden');

  buttonFour.classList.remove('hidden');
  buttonFourAlt.classList.add('hidden');
})