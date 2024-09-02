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
});

dropBtn2.addEventListener('click', () => {
    hiddenTextTwo.classList.toggle('hidden');
});

dropBtn3.addEventListener('click', () => {
    hiddenTextThree.classList.toggle('hidden');
});

dropBtn4.addEventListener('click', () => {
    hiddenTextFour.classList.toggle('hidden');
  });
