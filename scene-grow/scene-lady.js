document.addEventListener("DOMContentLoaded", function() {
  var container = document.querySelector("#scene-lady");
  var hanaNumber = 5 + Math.floor(Math.random() * 10);
  for (var i = 0; i < hanaNumber; i++) {
    createHanaAnimation(container);
  }
});

function createHanaAnimation(container) {
  var hana = document.createElement("div");
  hana.classList.add("hana");
  hana.style.left = Math.floor(Math.random() * 100) + "%";
  hana.style.top = Math.floor(Math.random() * 100) + "%";
  container.appendChild(hana);
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
  var animation = hana.animate({ transform: ["scale(0.1)", "scale(1)"],
                                 opacity: [1, 0] },
                               { easing: "ease-in",
                                 duration: duration,
                                 fill: "forwards",
                                 iterations: Infinity });
  if (animation.finished) {
    animation.effect.timing.iterations = 1;
    animation.finished.then(function() {
      hana.remove();
      createHanaAnimation(container);
    });
  }
}
