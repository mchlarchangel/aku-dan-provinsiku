function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = trailer.querySelector('iframe');
    if (video.tagName.toLowerCase() === 'iframe') {
        video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
    trailer.classList.toggle('active');
}


function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url(./images/${bg})`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}