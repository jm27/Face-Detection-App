const video = document.querySelector(".webcam");

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const face = document.querySelector(".face");
const faceCtx = face.getContext("2d");

const faceDetector = new window.FaceDetector();

console.log(video, canvas, face, faceDetector);

// write a function that will populate the users video

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  // size canvas for same size as video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  face.width = video.videoWidth;
  face.height = video.videoHeight;
}

populateVideo();
console.log(populateVideo);
