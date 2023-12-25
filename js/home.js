const swiper = new Swiper('.home-swiper', {
    slidesPerGroup: 4,
    speed: 1000,
    allowTouchMove: false,
    slidesPerView: 4,
    navigation: {
        nextEl: '.nextArrow',
        prevEl: '.prevArrow',
    },
});
const productSlider = new Swiper('.swiperProductSlider', {
    reverseDirection: true,
    slidesPerView: 3.4,
  });

let defaultImg = document.querySelector('.defaultImg')
let defaultSrc = defaultImg.getAttribute("src")
let proHoverItems = document.querySelectorAll('.homePage .defaultSlider .swiper-slide .slideDetail')
proHoverItems.forEach(pro=>{
    pro.addEventListener("mouseenter" ,e=> {
        let imgAtrr = e.target.previousSibling.previousSibling.getAttribute("src");
        defaultImg.setAttribute("src" , imgAtrr)
        defaultImg.classList.add('show')
    })
})
proHoverItems.forEach(pro=>{
    pro.addEventListener("mouseleave" ,e=> {
        defaultImg.setAttribute("src" , defaultSrc);
        defaultImg.classList.remove('show')
    })
})


// SCROLL ANIMATION


// let aboutHome = document.querySelectorAll('.aboutHome');


// const observerRightOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.3
// };

// function observerRightCallback(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log(entry);
//     }
//     // Add the else if you want to fade out images out of the viewport

//   });
// }

// const rightObserver = new IntersectionObserver(observerRightCallback, observerRightOptions);

// aboutHome.forEach((el) => rightObserver.observe(el));

gsap.registerPlugin(ScrollTrigger);

/*  SCENE 1 */
// let scene1 = gsap.timeline();
// ScrollTrigger.create({
//     animation: scene1,
//     trigger: ".aboutHome",
//     start: "top top",
//     end: "end end",
//     scrub: 3,
//     markers : true,
// });


// scene1.to(".move", { y: 0, x: 100, scale: 0.9, ease: "power1.in" }, 0)




const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".aboutHome",
        start: "top top",
        end: "end",
        pin: true,
        scrub: 4,
        markers:true,
    }
});

tl.to(".move", { x:200, duration: 2 , ease: "power1.in" });