// console.log("BONJOUR !")

class Timer {
    constructor(timerInput, startButton, pauseButton){
        this.timerInput = timerInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
    }
    start(){
        console.log('start the timer');
    }
}
   const timerInput = document.querySelector('#timerTime');
   const startButton = document.querySelector('#start');
   const pauseButton = document.querySelector('#pause');

   const timer = new Timer(timerInput, startButton, pauseButton)