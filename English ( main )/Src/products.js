// Back to top button

const backToTopBtn = document.querySelector("#upBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 1000) {
    if (!backToTopBtn.classList.contains("btnEntrance")) {
      backToTopBtn.classList.remove("btnExit");
      backToTopBtn.classList.add("btnEntrance");
      backToTopBtn.style.display = "block";
    }
  } else {
    if (backToTopBtn.classList.contains("btnEntrance")) {
      backToTopBtn.classList.remove("btnEntrance");
      backToTopBtn.classList.add("btnExit");
      setTimeout(function () {
        backToTopBtn.style.display = "none";
      }, 250);
    }
  }
}

// Buttons click

function smoothScroll(target, duration) {
  var target = document.querySelector(target);

  var targetPosition = target.getBoundingClientRect().top;

  var startPosition = window.pageYOffset;

  var distance = targetPosition - startPosition;

  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;

    var timeElapsed = currentTime - startTime;

    var run = ease(timeElapsed, startPosition, distance, duration);

    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  //Function ease

  function ease(t, b, c, d) {
    t /= d / 2;

    if (t < 1) return (c / 2) * t * t + b;

    t--;

    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}