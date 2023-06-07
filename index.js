const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');


let startTime;
let spendtime = 0;
let timerInterval;


const updateTimer = () =>  {
  const currentTime = new Date();
  const spendtime = currentTime - startTime;
  const formattedTime = new Date(spendtime).toISOString().substr(11, 12);
  timerDisplay.textContent = formattedTime;
}


startButton.addEventListener('click', () => {
  startTime = new Date() - spendtime;
  timerInterval = setInterval(updateTimer, 1); 
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  spendtime = new Date() - startTime;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
});

resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerDisplay.textContent = '00:00:00';
  spendtime = 0;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
});
