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


gsap.registerPlugin(ScrollTrigger);

let parallaxLeft = gsap.timeline();
parallaxLeft.to('.rightScroll' , {
    x : "15vw"
})
ScrollTrigger.create({
    animation:parallaxLeft , 
    trigger : ".aboutHome",
    start:"top 0%",
    end:"bottom 0%",
    scrub : 0.5,

})

let parallaxRight = gsap.timeline();
parallaxRight.to('.leftScroll' , {
    x : "-15vw"
})
ScrollTrigger.create({
    animation:parallaxRight , 
    trigger : ".aboutHome",
    start:"top 0%",
    end:"bottom 0%",
    scrub : 0.5,

})


let slowScroll = gsap.timeline();
slowScroll.to('.slowScroll' , {
    x : "-7vw"
})
ScrollTrigger.create({
    animation:slowScroll , 
    trigger : ".aboutHome",
    start:"top 0%",
    end:"bottom 0%",
    scrub : 0.5,

})

const text = new SplitType('.relatedProTitle h4', { types: 'words' })
const textBlog = new SplitType('.relatedBlogsTitle h4', { types: 'words' })








let number = 0;

//شروع افکت تایپ متن

let start = setInterval( 
  
effect
,
//سرعت تایپ بر میلی ثانیه
55
);

function effect(){

//انتخاب کردن تگ مورد نظر
 let result = document.querySelector(".homePage .defaultTitle h1");
 let text = document.querySelector(".homePage .defaultTitle p").innerHTML;
 
// متن
 //اضافه کردن حروف ها به هم دیگه
 number +=  + 1;
 
 //نمایش نتیجه
 result.innerHTML = text.substr(0,number);
  //برای اینکه کاربر بتونه راحت متن رو انتخاب کنه و به مشکل بر نخوره
  if(number > text.length) {
    clearInterval(start);
  }
}
