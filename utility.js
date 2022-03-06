
// mute toggle button //
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


  // testing //
  //document.body.style.backgroundColor = "white";
} 
//
