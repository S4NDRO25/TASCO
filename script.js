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

  document.addEventListener("DOMContentLoaded", function(event) {
    var radio1 = document.getElementById('radio1');
    var radio2 = document.getElementById('radio2');
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var lbl1 = document.getElementById('lbl1');
    var lbl2 = document.getElementById('lbl2');
  
    // Set input1 as required by default
    input1.required = true;
    lbl2.style.display = "none";
  
    // Add event listeners to radio buttons
    radio1.addEventListener('change', function() {
      if (this.checked) {
        input1.required = true;
        input2.required = false;
        input2.style.display = "none";
        lbl2.style.display = "none";
        input1.style.display = "block";
        lbl1.style.display = "block";
      }
    });
  
    radio2.addEventListener('change', function() {
      if (this.checked) {
        input1.required = false;
        input2.required = true;
        input1.style.display = "none";
        lbl1.style.display = "none";
        input2.style.display = "block";
        lbl2.style.display = "block";
      }
    });

  });
  