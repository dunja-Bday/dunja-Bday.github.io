// Set the date we're counting down to
var countDownDate = new Date("Oct 28, 2017 19:50:00").getTime();
//19 50
// Update the count down every 1 second
var state=false;
var x = setInterval(function() {
 
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  
  // Time calculations for days, hours, minutes and seconds

  var days = Math.floor((distance  / (1000 * 60 * 60 * 24)));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
    if(!state)
        {
  document.getElementById("timer").innerHTML = + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
        }
    else 
        {
            
        }
    
  // If the count down is finished, write some text 
  if (distance < 0) {
    
    document.getElementById("timer").innerHTML = "!~Happy Birthday~!";
      if(distance<-1000*60*60){
        countDownDate=new Date("Oct 28, "+((new Date()).getFullYear()+1).toString()+" 19:50:00").getTime();
      }
  }
}, 1000);