const video = document.querySelector('.video');
const testVid = document.querySelector('#tes');
const buttonStart = document.querySelector('#start');
const buttonNext = document.querySelector('#next');
const otherVideo = document.querySelector('#video1');

let count = 0;

if (navigator && navigator.mediaDevices) {
  const options = {
    audio: false,
    video: {
      facingMode: 'user',
      width: 500,
      height: 390,
    },
  };
  navigator.mediaDevices
    .getUserMedia(options)
    .then((stream) => {
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
      };
    })
    .catch((err) => {
      console.log(err);
    });
} else {
  console.log('gagal');
}

buttonStart.addEventListener('click', () => {
  if (count === 0) {
    count++;

    let nextVid = '../../assets/videos/video' + count + '.mp4';
    otherVideo.src = nextVid;
    otherVideo.play();
  } else {
    if (otherVideo.paused) {
      otherVideo.play();
    }
  }
});

buttonNext.addEventListener('click', () => {
  count++;
  if (count === 3) {
    count = 1;
  }
  console.log(count);
  let nextVid = '../../assets/videos/video' + count + '.mp4';
  otherVideo.src = nextVid;
  otherVideo.play();
});