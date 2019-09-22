(function () {
  var video = document.querySelector('.video__display');
  var bigPlayBtn = document.querySelector('.video__playbtn');
  var smallPlayBtn = document.querySelector('.video__controlls-play-play');
  var smallPauseBtn = document.querySelector('.video__controlls-play-pause');
  var volumeBtn = document.querySelector('.video__controlls-volume');
  var poster = document.querySelector('.video__controlls-volume');
  var circleProgress = document.querySelector('.video__controlls-circle--progress');
  var progressBar = document.querySelector('.video__controlls-bar--progress');
  var circleVolume = document.querySelector('.video__controlls-circle--volume');
  var volumeBar = document.querySelector('.video__controlls-bar--volume');

  circleVolume.style.left = '30%';
  var currentVolume = 0.3;
  video.volume = currentVolume;


  bigPlayBtn.addEventListener('click', function (e) {
    e.preventDefault();
    video.play();
    bigPlayBtn.style.display = 'none';
    smallPauseBtn.style.display = 'block';
    smallPlayBtn.style.display = 'none';
  })

  video.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      bigPlayBtn.style.display = 'none';
      smallPlayBtn.style.display = 'none';
      smallPauseBtn.style.display = 'block';
    } else {
      video.pause();
      bigPlayBtn.style.display = 'block';
      smallPlayBtn.style.display = 'block';
      smallPauseBtn.style.display = 'none';
    }
  })

  video.addEventListener('timeupdate', function () {
    var position = video.currentTime / video.duration;
    circleProgress.style.left = position * 100 + '%';
  })

  smallPlayBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (video.paused) {
      video.play();
      bigPlayBtn.style.display = 'none';
      this.style.display = 'none';
      smallPauseBtn.style.display = 'block';

    } else {
      video.pause();

    }
  })

  smallPauseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (!video.paused) {
      video.pause();
      this.style.display = 'none';
      smallPlayBtn.style.display = 'block';
      bigPlayBtn.style.display = 'block';

    } else {
      video.play();
    }
  })

  progressBar.addEventListener('click', function (e) {
    if (video.paused) {
      bigPlayBtn.style.display = 'none';
      smallPauseBtn.style.display = 'block';
      smallPlayBtn.style.display = 'none';
    }
    let barWidth = this.offsetWidth;
    let clickPosition = e.offsetX;
    circleProgress.style.left = (100 * clickPosition / barWidth) + '%';
    video.currentTime = video.duration * clickPosition / barWidth;

    video.play();
  })



  volumeBar.addEventListener('click', function (e) {
    let barWidth = this.offsetWidth;
    let clickPosition = e.offsetX;
    circleVolume.style.left = (100 * clickPosition / barWidth) + '%';
    currentVolume = clickPosition / barWidth;
    video.volume = currentVolume;
    volumeBtn.classList.remove('active');
  })

  volumeBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      video.volume = 0;
    } else {
      video.volume = currentVolume;
    }
  })
})()
