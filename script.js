const video = document.getElementById('video')

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;   // browser versions

function startVideo() {
    navigator.getUserMedia(
      { video: true },
      stream => video.srcObject = stream,
      err => console.error(err)
    )
  }

startVideo();