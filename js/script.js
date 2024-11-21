let slideIndex = 1;
let run;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    clearInterval(run);
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Slides");
    let dots = document.getElementsByClassName("dot");
    let nextslide = 1;
    if (n == slides.length) {
        nextslide = 1;
    } else {
        nextslide = n + 1;
    }
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    run = setTimeout(() => {
        showSlides((slideIndex = nextslide));
    }, 3000);
}
const DQ = (s) => {
    return document.querySelector(s);
};
window.addEventListener("load", function () {
    DQ(".btn-nav").addEventListener("click", function (e) {
        e.preventDefault();
        head = DQ("header");
        if (DQ("header.open")) {
            head.classList.remove("open");
            DQ(
                ".btn-nav"
            ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>`;
        } else {
            head.classList.add("open");
            DQ(
                ".btn-nav"
            ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>`;
        }
    });
    DQ("nav a").addEventListener("click", function () {
        DQ("header").classList.remove("open");
        DQ(
            ".btn-nav"
        ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>`;
    });
});
