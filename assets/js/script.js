//↓写真スライドショー
document.addEventListener("DOMContentLoaded", function(){
    const slides = document.querySelectorAll(".slideshow-zoom li");
    let activeIndex = 0;

    slides[activeIndex].style.display = "block";

    setInterval(function(){
        slides[activeIndex].style.transition = "opacity 5s";
        slides[activeIndex].style.opacity = 0;

        const nextIndex = (activeIndex + 1) % slides.length;

        setTimeout(function(){
            slides[activeIndex].style.display = "none";
            slides[activeIndex].style.opacity = 1;
            slides[nextIndex].style.display = "block";
            slides[nextIndex].style.opacity = 1;
            activeIndex = nextIndex;
        }, 8000);
    }, 4000);
});