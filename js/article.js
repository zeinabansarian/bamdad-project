

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








let newsLeft = document.querySelectorAll('.newsLeft');

newsLeft.forEach((el) => {
  el.classList.add("loadingLeft");
});

const observerLeftOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
};

function observerLeftCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loadedLeft");
    }
    // Add the else if you want to fade out images out of the viewport

  });
}

const leftObserver = new IntersectionObserver(observerLeftCallback, observerLeftOptions);

newsLeft.forEach((el) => leftObserver.observe(el));




let proItem = document.querySelectorAll('.proItem');

if(proItem[0]){
    const leftItem = proItem[0];
    leftItem.classList.add("loadingLeft");
    const observerLeftItemOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
      };
      
      function observerLeftItemCallback(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("loadedLeft");
          }
      
        });
      }
      
      const leftObserver = new IntersectionObserver(observerLeftItemCallback, observerLeftItemOptions);
      
       leftObserver.observe(leftItem);
}
if(proItem[1]){
    const middletItem = proItem[1];
    middletItem.classList.add("loadingTop");
    const observermiddletItemOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
      };
      
      function observermiddletItemCallback(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("loadedTop");
          }
      
        });
      }
      
      const middleObserver = new IntersectionObserver(observermiddletItemCallback, observermiddletItemOptions);
      
       middleObserver.observe(middletItem);
}
if(proItem[2]){
    const rightItem = proItem[2];
    rightItem.classList.add("loadingRight");
    const observerrightItemOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
      };
      
      function observerrightItemCallback(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("loadedRight");
          }
      
        });
      }
      
      const rightObserver = new IntersectionObserver(observerrightItemCallback, observerrightItemOptions);
      
       rightObserver.observe(rightItem);
}
let blogItem = document.querySelectorAll('.blogItem');

if(blogItem[0]){
    const leftItem = blogItem[0];
    leftItem.classList.add("loadingLeft");
    const observerLeftItemOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
      };
      
      function observerLeftItemCallback(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("loadedLeft");
          }
      
        });
      }
      
      const leftObserver = new IntersectionObserver(observerLeftItemCallback, observerLeftItemOptions);
      
       leftObserver.observe(leftItem);
}
if(blogItem[1]){
    const middletItem = blogItem[1];
    middletItem.classList.add("loadingTop");
    const observermiddletItemOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
      };
      
      function observermiddletItemCallback(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("loadedTop");
          }
      
        });
      }
      
      const middleObserver = new IntersectionObserver(observermiddletItemCallback, observermiddletItemOptions);
      
       middleObserver.observe(middletItem);
}
if(blogItem[2]){
    const rightItem = blogItem[2];
    rightItem.classList.add("loadingRight");
    const observerrightItemOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
      };
      
      function observerrightItemCallback(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("loadedRight");
          }
      
        });
      }
      
      const rightObserver = new IntersectionObserver(observerrightItemCallback, observerrightItemOptions);
      
       rightObserver.observe(rightItem);
}
