
document.addEventListener('DOMContentLoaded', function() {
  var animCount = 0;
  var ax = document.getElementById("ax");
  var bamboo  = document.getElementById("bamboo");
  var bambooBacks = [ document.getElementById("bamboo-back1"),
                      document.getElementById("bamboo-back2"),
                      document.getElementById("bamboo-back3"),
                      document.getElementById("bamboo-back4") ];

  ax.style.bottom = "70px";
  bamboo.classList.add('bamboo-zoom-after');

  var hiddenBack = function() {
    bambooBacks.forEach(back => {
      back.style.display = "none";
    });
  };

  var displayBack = function() {
    bambooBacks.forEach(back => {
      back.style.display = "inline";
        console.log(getComputedStyle(back).display);
    });
  };

  var removeClasses = function() {
    ax.classList.remove('run-ax-anim');
    ax.offsetWidth;  // flush
    bambooBacks.forEach((back, i) => {
      back.classList.remove('run-bamboo-back' + (i + 1) + '-anim');
      back.offsetWidth; //flush
    });
  };

  var addClasses = function() {
    ax.classList.add('run-ax-anim');
    bambooBacks.forEach((back, i) => {
      back.classList.add('run-bamboo-back' + (i + 1) + '-anim');
      back.offsetWidth; //flush
    });
  };

  ax.addEventListener("transitionend", function() {
    displayBack();
    addClasses();
    ax.addEventListener("animationend", function() {
      removeClasses();
      animCount++;
      if (animCount >= 3) return;
      addClasses();
    });
  });
});
