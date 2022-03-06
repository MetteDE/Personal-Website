function toggleMute() {
  var video = document.getElementById("myVideo");
  if(video.muted){
    video.muted = false;
    document.getElementById("toggle").innerHTML = "mute"
  } 
  else {
    video.muted = true;
    document.getElementById("toggle").innerHTML = "unmute"
}
}

function videoStarts(){
  var video = document.getElementById("myVideo");
  video.volume = 0.2;
  document.oncontextmenu = function() {
    return false;
  }
}

// Hide video after it ends // 
function videoEnds() {
  var video = document.getElementById("myVideo");
  video.style.display = "None" 
  document.oncontextmenu = function() {
    return true;
  }
} 

