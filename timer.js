class Timer {
    constructor(timerInput, startButton, pauseButton, callbacks){
        this.timerInput = timerInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onBegin = callbacks.onBegin;
            this.onProgress = callbacks.onProgress;
            this.onEnd = callbacks.onEnd;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause)
    }
    start = () => {
        if(this.onBegin){
            this.onBegin(this.timeLeft);
        }
        // console.log('start the timer');
        // 1 second 
        this.tick();
        this.intervalId = setInterval(this.tick, 50);
       
    }

    pause = () => {
        clearInterval(this.intervalId)
    }


    // tick = () => {
    //     // console.log('tick')
    //     const timeLeft = parseFloat(this.timerInput.value);
    //     this.timerInput.value = timeLeft - 1;
    // }

    // tick = () => {
    //     const timeLeft = this.timerInput;
    //     this.timerInput = timeLeft - 1;

    // }

    tick = () => {

        if (this.timeLeft <= 0){
            this.pause();
          if(this.onEnd){
              this.onEnd();
          } 
        } else {
            this.timeLeft = this.timeLeft - 0.5;
            if(this.onProgress){
                this.onProgress(this.timeLeft);

            }
        }
        
       
    }
    // The get syntax binds an object property to a function that will be called when that property is looked up.

    get timeLeft () {
        return parseFloat(this.timerInput.value);
    }
      

    // The set syntax binds an object property to a function to be called when there is an attempt to set that property.




    // function financial(x) {
    //     return Number.parseFloat(x).toFixed(2);
    //   }
      
    //   console.log(financial(123.456));
      // expected output: "123.46"
    set timeLeft(time){
    this.timerInput.value = time.toFixed(2);
 }
}

  