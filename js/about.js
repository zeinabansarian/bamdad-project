

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
