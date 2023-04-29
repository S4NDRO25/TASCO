window.onload = function() {
    var scroll = new SmoothScroll('a[href*="#"]');
}
function s1() {
    document.querySelector("#div2").style.display = "none";
    document.querySelector("#div1").style.display = "block";
    document.querySelector(".jump2").style.display = "none";
    document.querySelector(".jump1").style.display = "block";
}

function s2() {
    document.querySelector("#div1").style.display = "none";
    document.querySelector("#div2").style.display = "block";
    document.querySelector(".jump1").style.display = "none";
    document.querySelector(".jump2").style.display = "block";
}

function showModal() {
    document.querySelector(".modal").style.display = "block";
  }
  function closeModal() {
    document.querySelector(".modal").style.display = "none";
  }
  
  window.addEventListener("click", hideModal);
  window.addEventListener("touchend", hideModal);
  
  function hideModal(event) {
    var modal = document.querySelector(".modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }