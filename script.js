const buttonOne = document.getElementById('dropBtn1');
const buttonTwo = document.getElementById('dropBtn2');
const buttonThree = document.getElementById('dropBtn3');
const buttonFour = document.getElementById('dropBtn4')
const hiddenTextOne = document.getElementById('hidden1');
const hiddenTextTwo = document.getElementById('hidden2');
const hiddenTextThree = document.getElementById('hidden3');
const hiddenTextFour = document.getElementById('hidden4');

const displayText = buttonOne.addEventListener('click', () => {
    hiddenTextOne.display;
    displayText(hiddenTextOne);
});
