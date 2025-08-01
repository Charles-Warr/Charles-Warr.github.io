document.getElementById('playButton').addEventListener('click', function() {
    const videoContainer = document.getElementById('videoContainer');
    const youtubeVideo = document.getElementById('youtubeVideo');

    videoContainer.style.display = 'block'; // Make the container visible

    if (youtubeVideo.requestFullscreen) {
        youtubeVideo.requestFullscreen();
    } else if (youtubeVideo.mozRequestFullScreen) { /* Firefox */
        youtubeVideo.mozRequestFullScreen();
    } else if (youtubeVideo.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        youtubeVideo.webkitRequestFullscreen();
    } else if (youtubeVideo.msRequestFullscreen) { /* IE/Edge */
        youtubeVideo.msRequestFullscreen();
    }
});