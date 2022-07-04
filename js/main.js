const navbar = document.getElementById("navbar");

// Slideshow script

let slideindex = 1;
showslide(slideindex);
function plusSlides(n) {
  showslide((slideindex += n));
}
function currentSlide(n) {
  showslides((slideIndex = n));
}
function showslide(n) {
  let i;
  let slides = document.getElementsByClassName("myslide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideindex = 1;
  }
  if (n < 1) {
    slideindex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideindex - 1].style.display = "block";
  dots[slideindex - 1].className += " active";
}

const scrollAnimate = () => {
  if (window.scrollY > 500) {
    const blogs = document.querySelectorAll(".blog-item");
    blogs.forEach((blog) => {
      blog.classList.add("blogAnimation");
    });
  }
  if (window.scrollY > 160) {
    document.getElementById("event-left").classList.add("animateEventLeft");
    document.getElementById("event-right").classList.add("animateEventRight");
  } else console.log(window.scrollY);
};

//  Navbar script
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    navbar.style.background = "white";
    navbar.style.color = "black";
    document.querySelector("#join").classList = "dark-join";
    document.querySelector(".logo-img").src = "../images/DarkLogo.png";
    document.querySelectorAll(".navlink").forEach((link) => {
      link.style.color = "black";
    });
    document.querySelectorAll(".icon").forEach((link) => {
      link.style.color = "black";
    });
  } else {
    navbar.style.background = "none";
    navbar.style.color = "white";
    document.querySelector("#join").classList = "light-join";
    document.querySelector(".logo-img").src = "../images/LightLogo.png";
    document.querySelectorAll(".navlink").forEach((link) => {
      link.style.color = "white";
    });
    document.querySelectorAll(".icon").forEach((link) => {
      link.style.color = "white";
    });
  }
});

window.addEventListener("scroll", scrollAnimate);
