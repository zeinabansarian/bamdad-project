

let newsRights = document.querySelectorAll('.newsRight');

newsRights.forEach((el) => {
  el.classList.add("loadingRight");
});

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
};

function observerCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loadedRight");
    }
    // Add the else if you want to fade out images out of the viewport

  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

newsRights.forEach((el) => observer.observe(el));



let scrollTops = document.querySelectorAll('.scrollTops');

scrollTops.forEach((el) => {
  el.classList.add("loadingTop");
});

const observerRightOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
};

function observerRightCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loadedTop");
    }
    // Add the else if you want to fade out images out of the viewport

  });
}

const rightObserver = new IntersectionObserver(observerRightCallback, observerRightOptions);

scrollTops.forEach((el) => rightObserver.observe(el));






let imgSecP = document.querySelectorAll('.imgSec p');

imgSecP.forEach((el) => {
  el.classList.add("lodingHide");
});

const observerHideOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
};

function observerLeftCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.isIntersecting);
      entry.target.classList.add("loadedShow");
    }
    // Add the else if you want to fade out images out of the viewport

  });
}

const hifeObserver = new IntersectionObserver(observerLeftCallback, observerHideOptions);

imgSecP.forEach((el) => hifeObserver.observe(el));










// let newsLeft = document.querySelectorAll('.newsLeft');

// newsLeft.forEach((el) => {
//   el.classList.add("loadingLeft");
// });

// const observerLeftOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.3
// };

// function observerLeftCallback(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("loadedLeft");
//     }
//   });
// }

// const leftObserver = new IntersectionObserver(observerLeftCallback, observerLeftOptions);

// newsLeft.forEach((el) => leftObserver.observe(el));




gsap.registerPlugin(ScrollTrigger);

let parallaxLeft = gsap.timeline();
parallaxLeft.to('.rightScroll' , {
    x : "-15vw"
})
ScrollTrigger.create({
    animation:parallaxLeft , 
    trigger : ".section1",
    start:"top 0%",
    end:"bottom 0%",
    scrub : 0.5,

})





const text = new SplitType('.mTitle h4', { types: 'words' })