(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    
  
    let birth = "Oct 15, 2022 16:21:00",

        countDown = new Date(birth).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = now - countDown ;
  
        document.getElementById("days").innerText = Math.ceil(distance / (day)),
        document.getElementById("hours").innerText = Math.ceil((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.ceil((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
        }, 0)
        console.log(countDown)
    }());