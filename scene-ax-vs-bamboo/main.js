
document.addEventListener('DOMContentLoaded', function() {
  var animCount = 0;
  var ax = document.getElementById("ax");
  var bamboo  = document.getElementById("bamboo");
  var bamboo1 = document.getElementById("bamboo-back1");
  var bamboo2 = document.getElementById("bamboo-back2");
  var bamboo3 = document.getElementById("bamboo-back3");
  var bamboo4 = document.getElementById("bamboo-back4");

  ax.style.bottom = "70px";

  var bambooTransition = function(target) {
    target.style.height = "700.47px";
    target.style.width  = "130px";
    target.style.left   = "40%";
    target.style.bottom = "-20px";
  }

  var bambooTransitionBack = function(target) {
    target.style.height = "700px";
    target.style.width = "126px";
    target.style.left =  "40.2%";
    target.style.bottom = "-20px";
  }

  var bambooZoom = function() {
    bamboo1.style.display = "none";
    bamboo2.style.display = "none";
    bamboo3.style.display = "none";
    bamboo4.style.display = "none";
    bamboo.style.transition = "all 3.5s linear";
    bamboo.style.height = "1400px";
    bamboo.style.width = "250px";
  }

  bambooTransition(bamboo);
  bambooTransitionBack(bamboo1);
  bambooTransitionBack(bamboo2);
  bambooTransitionBack(bamboo3);
  bambooTransitionBack(bamboo4);
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
          bambooZoom();
          return;
      }
      addClasses();
    });
  });
});
