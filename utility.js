
// mute toggle button //
function toggleMute() {
  var video = document.getElementById("myVideo");
  var img = document.getElementById("symbol")
  if(video.muted){
    video.muted = false;
    img.src = "https://img.icons8.com/ios-filled/50/000000/no-audio--v2.png"
  } 
  else {
    video.muted = true;
    img.src = "https://img.icons8.com/ios-filled/50/000000/mute--v1.png"
}
}
// during the video //
function videoStarts(){
  // set default audio volume //
  var video = document.getElementById("myVideo");
  video.volume = 0.2;
  // hide contextmenu during the video //
  document.oncontextmenu = function() {
    return false;
  }
}

// after the video // 
function videoEnds() {
  // hide video after it ended //
  var video = document.getElementById("myVideo");
  video.style.display = "None" 
  // show contextmenu after the video ended //
  document.oncontextmenu = function() {
    return true;
  }
} 

