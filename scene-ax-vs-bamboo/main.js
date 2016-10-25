
document.addEventListener('DOMContentLoaded', function() {
  var animCount = 0;
  var ax = document.getElementById("ax");
  var bamboo1 = document.getElementById("bamboo-back1");
  var bamboo2 = document.getElementById("bamboo-back2");
  var bamboo3 = document.getElementById("bamboo-back3");
  var bamboo4 = document.getElementById("bamboo-back4");

  ax.style.bottom = "70px";

  var removeClasses = function() {
    ax.classList.remove('run-ax-anim');
    ax.offsetWidth;  // flush
    bamboo1.classList.remove('run-bamboo-back1-anim');
    bamboo1.offsetWidth; //flush
    bamboo2.classList.remove('run-bamboo-back2-anim');
    bamboo2.offsetWidth; //flush
    bamboo3.classList.remove('run-bamboo-back3-anim');
    bamboo3.offsetWidth; //flush
    bamboo4.classList.remove('run-bamboo-back4-anim');
    bamboo4.offsetWidth; //flush
  }

  var addClasses = function() {
    ax.classList.add('run-ax-anim');
    bamboo1.classList.add('run-bamboo-back1-anim');
    bamboo2.classList.add('run-bamboo-back2-anim');
    bamboo3.classList.add('run-bamboo-back3-anim');
    bamboo4.classList.add('run-bamboo-back4-anim');
  }
  ax.addEventListener("transitionend", function() {
    addClasses();
    ax.addEventListener("animationend", function() {
      removeClasses();
      animCount++;
      if (animCount >= 3) {
          return;
      }
      addClasses();
    });
  });
  
});
