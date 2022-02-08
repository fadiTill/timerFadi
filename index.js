// console.log("BONJOUR !")

class Timer {
    constructor(timerInput, startButton, pauseButton){
        this.timerInput = timerInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause)
    }
    start = () => {
        // console.log('start the timer');
        // 1 second 
        this.tick();
        this.intervalId = setInterval(this.tick, 1000);
       
    }

    pause = () => {
        clearInterval(this.intervalId)
    }


    tick = () => {
        // console.log('tick')
        const timeLeft = parseFloat(this.timerTime.value);
    }
}

   const timerInput = document.querySelector('#timerTime');
   const startButton = document.querySelector('#start');
   const pauseButton = document.querySelector('#pause');

   const timer = new Timer(timerInput, startButton, pauseButton)