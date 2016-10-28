document.addEventListener("DOMContentLoaded", function() {
  var container = document.querySelector("#scene-lady");
  var hanaNumber = 40;
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
  var duration = 3000 + Math.floor(Math.random() * 1000);
  var delay = 9000 + Math.floor(Math.random() * 5000);
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
  hana.animate({ transform: ["scale(0)", "scale(1)"] },
               { easing: easing,
                 duration: duration,
                 delay: delay,
                 fill: "both" });
}
