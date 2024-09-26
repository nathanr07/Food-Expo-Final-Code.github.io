let currentDotIndex = 0;
const dotSlides = document.querySelector('.dot-slides');
const dots = document.querySelectorAll('.dot');

function showDotSlide(index) {
    dotSlides.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function autoSlide() {
    currentDotIndex = (currentDotIndex + 1) % dots.length;
    showDotSlide(currentDotIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showDotSlide(index);
        currentDotIndex = index; 
    });
});

setInterval(autoSlide, 5000); // Each slide changes every 5 seconds
