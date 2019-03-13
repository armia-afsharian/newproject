
var scrl = document.getElementById('scrol');




var sticky = scrl.offsetTop;

function event() {
  if (window.pageYOffset  >= sticky) {
    scrl.classList.add("hide")
  } else {
    scrl.classList.remove("hide");
  }
};
