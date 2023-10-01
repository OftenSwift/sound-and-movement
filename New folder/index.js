

var intervalID = 0;
var change =100;


function playNani() {

document.getElementById("startButton").disabled = true;
document.getElementById("stopButton").disabled = false;

  mysound = new sound("nani_mkANQUf.mp3");
  mysound.play();

}


function sound(src)  {

  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.play = function() {
    this.sound.play();
  }
}

function stopNani() {

  document.getElementById("startButton").disabled = false;
  document.getElementById("stopButton").disabled = true;


}



function ballStart() {
  var i =0;
  var image = document.getElementById("ballfour");
  intervalID = setInterval(function() {
    image.style.left = change +"px";
    image.style.top = change +"px";
    change +=5;
    
    
  },20);

}

function ballStop() {

   clearInterval(intervalID);

}

