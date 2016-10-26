
document.addEventListener('DOMContentLoaded', function() {
  var bambooBacks = [ document.getElementById("bamboo-back1"),
                      document.getElementById("bamboo-back2"),
                      document.getElementById("bamboo-back3"),
                      document.getElementById("bamboo-back4") ];

  var dummy = document.getElementById("dummy");
  dummy.ontransitionend = function() {
    bambooBacks.forEach(back => { back.style.display = "inline"; });
  }
  dummy.style.marginLeft = "1px";
});
