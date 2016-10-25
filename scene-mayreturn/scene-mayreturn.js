document.addEventListener("DOMContentLoaded", function() {
  var container = document.querySelector("#scene-mayreturn");
  var hoshiNumber = 5 + Math.floor(Math.random() * 10);
  for (var i = 0; i < hoshiNumber; i++) {
    createHoshiAnimation(container);
  }
});

function createHoshiAnimation(container) {
  var hoshi = document.createElement("div");
  hoshi.classList.add("hoshi");
  hoshi.style.left = Math.floor(Math.random() * 100) + "%";
  hoshi.style.top = Math.floor(Math.random() * 100) + "%";
  container.appendChild(hoshi);
  var duration = 1000 + Math.floor(Math.random() * 1000);
  var easing = "linear";
  switch (Math.floor(Math.random() * 4)) {
    case 0 : {
      easing = "ease-in";
      break;
    }
    case 1 : {
      easing = "ease-out";
      break;
    }
    case 2 : {
      easing = "ease-in-out";
      break;
    }
  }
  var animation = hoshi.animate({ transform: ["scale(0.1)", "scale(1)"],
                                 opacity: [1, 0] },
                               { easing: "ease-in",
                                 duration: duration,
                                 fill: "forwards",
                                 iterations: Infinity });
  if (animation.finished) {
    animation.effect.timing.iterations = 1;
    animation.finished.then(function() {
      hoshi.remove();
      createHoshiAnimation(container);
    });
  }
}
