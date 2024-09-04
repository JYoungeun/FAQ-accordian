const buttonOne = document.getElementById('buttonOne');
const buttonTwo = document.getElementById('buttonTwo');
const buttonThree = document.getElementById('buttonThree');
const buttonFour = document.getElementById('buttonFour');
const hiddenTextOne = document.getElementById('hidden1');
const hiddenTextTwo = document.getElementById('hidden2');
const hiddenTextThree = document.getElementById('hidden3');
const hiddenTextFour = document.getElementById('hidden4');

buttonOne.addEventListener('click', () => {
  hiddenTextOne.classList.toggle('hidden');
});

buttonTwo.addEventListener('click', () => {
  hiddenTextTwo.classList.toggle('hidden');
});

buttonThree.addEventListener('click', () => {
  hiddenTextThree.classList.toggle('hidden');
});

buttonFour.addEventListener('click', () => {
  hiddenTextFour.classList.toggle('hidden');
});