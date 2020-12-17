import colors from './colors.js';

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body')
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const colorSwitch = {
  isActive: false,
  intervalId: null,

  start() {
    if (this.isActive) { return; }
    this.isActive = true;
  this.intervalId = setInterval(() => {
    let i = randomIntegerFromInterval(0, colors.length);
    refs.body.style.backgroundColor = colors[i];
  }, 1000);
  },
  
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    this.intervalId = null;
  }
};


refs.startBtn.addEventListener('click', colorSwitch.start.bind(colorSwitch));

refs.stopBtn.addEventListener('click', colorSwitch.stop.bind(colorSwitch));

