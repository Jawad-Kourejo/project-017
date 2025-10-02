

gsap.registerPlugin(ScrollTrigger);



let st = ScrollTrigger.create({
  trigger: "body", 
  start: "150px top",
  endTrigger: "footer", 
  end: "bottom 0%",
  markers: false,
  
  onEnter: () =>
    document.querySelector(".navigation-links-fixed").classList.add("fixed"),
  onLeaveBack: () =>
    document.querySelector(".navigation-links-fixed").classList.remove("fixed"),
  onLeave: () =>
    document.querySelector(".navigation-links-fixed").classList.remove("fixed"),

});



console.log(st.trigger);


const toggleButton = document.querySelector(".drawer-links");

toggleButton.addEventListener("click", toggleDrawer);
function toggleDrawer() {
  // alert("clicked");
  const drawer = document.getElementById("drawer");
  drawer.classList.toggle("open");
}

const slides = document.querySelectorAll(".slide");
let current = 0;

slides.forEach((slide) => {
  const img = slide.getAttribute("data-image");
  slide.querySelectorAll(".slice").forEach((slice) => {
    slice.style.backgroundImage = `url(${img})`;
  });
});

function showSlide(index) {
  const slide = slides[index];
  gsap.set(slide, { opacity: 1 });
  gsap.fromTo(
    slide.querySelectorAll(".slice"),
    { x: "100%" },
    {
      x: "0%",
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      onComplete: () => {
        setTimeout(() => {
          gsap.to(slide, { opacity: 0, duration: 0.5 });
          current = (current + 1) % slides.length;
          showSlide(current);
        }, 3000); // 3s hold
      },
    }
  );
}

showSlide(current);

// Carousel functionality

$(document).ready(function () {
  $(".carousel").carousel();
});
