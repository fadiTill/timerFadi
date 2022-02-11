// console.log("BONJOUR !")

// class Timer {
//     constructor(timerInput, startButton, pauseButton, callbacks){
//         this.timerInput = timerInput;
//         this.startButton = startButton;
//         this.pauseButton = pauseButton;
//         if(callbacks){
//             this.onBegin = callbacks.onBegin;
//             this.onProgress = callbacks.onProgress;
//             this.onEnd = callbacks.onEnd;
//         }

    //     this.startButton.addEventListener('click', this.start);
    //     this.pauseButton.addEventListener('click', this.pause)
    // }
    // start = () => {
    //     if(this.onBegin){
    //         this.onBegin();
    //     }
    //     // console.log('start the timer');
    //     // 1 second 
    //     this.tick();
    //     this.intervalId = setInterval(this.tick, 1000);
       
    // }

    // pause = () => {
    //     clearInterval(this.intervalId)
    // }


    // tick = () => {
    //     // console.log('tick')
    //     const timeLeft = parseFloat(this.timerInput.value);
    //     this.timerInput.value = timeLeft - 1;
    // }

    // tick = () => {
    //     const timeLeft = this.timerInput;
    //     this.timerInput = timeLeft - 1;

    // }

    // tick = () => {

    //     if (this.timeLeft <= 0){
    //         this.pause();
    //       if(this.onEnd){
    //           this.onEnd();
    //       } 
    //     } else {
    //         this.timeLeft = this.timeLeft - 1;
    //         if(this.onProgress){
    //             this.onProgress();

    //         }
    //     }
        
       
//     }
//     // The get syntax binds an object property to a function that will be called when that property is looked up.

//     get timeLeft () {
//         return parseFloat(this.timerInput.value);
//     }
      

//     // The set syntax binds an object property to a function to be called when there is an attempt to set that property.


//     set timeLeft(time){
//     this.timerInput.value = time;
//  }
// }

   const timerInput = document.querySelector('#timerTime');
   const startButton = document.querySelector('#start');
   const pauseButton = document.querySelector('#pause');
   const circle = document.querySelector('circle');

   //calculate cirle  Perimeter
  const perimeter = circle.getAttribute('r') * 2 * Math.PI;
  circle.setAttribute('stroke-dasharray', perimeter);
  
  let duration;
//   let currentOffset = 0;
  const timer = new Timer(timerInput, startButton, pauseButton,{
    onBegin(totalTimeLeft) {
     console.log('started')
     duration = totalTimeLeft
    },
 
    onProgress(timeLeft){
        // console.log('ticked')
       
        // circle.setAttribute('stroke-dashoffset', currentOffset);
        // currentOffset = currentOffset - 1

        circle.setAttribute('stroke-dashoffset',
        perimeter * timeLeft / duration - perimeter
        );
        

 
    },
    onEnd(){
        console.log('completed')
    }
    
});

   
   
    