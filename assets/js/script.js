//↓写真スライドショー
document.addEventListener("DOMContentLoaded", function(){
    const slides = document.querySelectorAll(".slideshow-zoom li");
    let activeIndex = 0;

    slides[activeIndex].style.display = "block";

    setInterval(function(){
        slides[activeIndex].style.transition = "opacity 2s";
        slides[activeIndex].style.opacity = 0;

        const nextIndex = (activeIndex + 1) % slides.length;

        setTimeout(function(){
            slides[activeIndex].style.display = "none";
            slides[activeIndex].style.opacity = 1;
            slides[nextIndex].style.display = "block";
            slides[nextIndex].style.opacity = 1;
            activeIndex = nextIndex;
        }, 2000);
    }, 2000);
});

//section5

//section6
const scrollContainer = document.querySelector(".scroll_movies");

  scrollContainer.addEventListener('wheel', (event) => {
        event.preventDefault();
        scrollContainer.scrollleft += event.deltaY; // スクロール位置を調整
  });

