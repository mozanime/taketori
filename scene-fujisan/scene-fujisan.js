document.addEventListener("DOMContentLoaded", function() {
  var container = document.querySelector("#scene-fujisan .hoshis");
  var hoshiNumber = 15;
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
  var duration = 2000 + Math.floor(Math.random() * 1000);
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
  hoshi.animate({ transform: ["scale(0)", "scale(0.8)"] },
                { easing: easing,
                  duration: duration,
                  iterations: Infinity });
}
