class Clock {
    constructor() {
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
      let date = new Date();
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      this.printTime(this.hours, this.minutes, this.seconds);

      let that = this

        setInterval(that._tick.bind(that), 1000)
      
    }
  
    printTime(hours, minutes, seconds) {
        let formatter = function(num) {
            if(num < 10) {
                return '0' + num.toString();
            } else {
                return num.toString();
            }
        }
        let fHours = formatter(hours);
        let fMinutes = formatter(minutes);
        let fSeconds = formatter(seconds);
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      console.log(fHours + ":" + fMinutes + ":" + fSeconds);
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      this.seconds++;
      if (this.seconds === 60) {
        this.minutes++;
        this.seconds = 0;
      }

      if (this.minutes === 60) {
        this.hours++;
        this.minutes = 0;
      }

      if (this.hours === 24) {
        this.hours = 0;
      }
      this.printTime(this.hours, this.minutes, this.seconds);
    // console.log(this);
    }
  }
  
  const clock = new Clock();