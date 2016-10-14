document.addEventListener("DOMContentLoaded", function(e) {
  // Just append necesssary elements.
  var container = document.createElement("section");
  container.id = "scene-born";

  var hime = document.createElement("div");
  hime.classList.add("hime");
  var halo = document.createElement("div");
  halo.classList.add("halo");

  var rightLabel = document.createElement("label");
  var leftLabel = document.createElement("label");
  rightLabel.classList.add("right");
  leftLabel.classList.add("left");

  container.appendChild(halo);
  container.appendChild(hime);
  container.appendChild(rightLabel);
  container.appendChild(leftLabel);
  document.querySelector("main").appendChild(container);
});
