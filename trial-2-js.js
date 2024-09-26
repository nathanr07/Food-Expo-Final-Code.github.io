let currentIndex = 0;
const fadeSlides = document.querySelectorAll('.fade-slides img');

function showSlide(index) {
    fadeSlides.forEach(slide => slide.classList.remove('active'));
    fadeSlides[index].classList.add('active');
}

function autoFade() {
    currentIndex = (currentIndex + 1) % fadeSlides.length;
    showSlide(currentIndex);
}

setInterval(autoFade, 5000); // Slide changes every 5 seconds (change number for longer or shorter duration)

