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
  var emailOption = document.getElementById('email-option');
  var phoneOption = document.getElementById('phone-option');
  var email = document.querySelector('.contact-selector label:nth-child(1)');
  var phone = document.querySelector('.contact-selector label:nth-child(3)');
  var emailInput =document.getElementById('email');
  var phoneInput = document.getElementById('phone');
  var emailLabel = document.querySelector('form label:nth-child(7)');
  var phoneLabel = document.querySelector('form label:nth-child(9)');

  email.style.backgroundColor = "blue";
  emailInput.required = true;
  emailInput.style.display = "block";
  emailLabel.style.display = "block";
  phone.style.backgroundColor = "white";
  phoneInput.required = false;
  phoneInput.style.display = "none";
  phoneLabel.style.display = "none";

  emailOption.addEventListener('change', function() {
    if (this.checked) {
      email.style.backgroundColor = "blue";
      emailInput.required = true;
      emailInput.style.display = "block";
      emailLabel.style.display = "block";
      phone.style.backgroundColor = "white";
      phoneInput.required = false;
      phoneInput.style.display = "none";
      phoneLabel.style.display = "none";
    }
  });
  phoneOption.addEventListener('change', function() {
    if (this.checked) {
      email.style.backgroundColor = "white";
      emailInput.required = false;
      emailInput.style.display = "none";
      emailLabel.style.display = "none";
      phone.style.backgroundColor = "blue";
      phoneInput.required = true;
      phoneInput.style.display = "block";
      phoneLabel.style.display = "block";
    }
  });
});

// document.getElementById('Airconditioning-Service').onclick = function (){
//   if(window.innerWidth < 1000){
//     document.getElementById('service1').style.display = "block";
//     document.getElementById('service2').style.display = "none";
//   }
// }

// document.getElementById('Electrical-service').onclick = function (){
//   if(window.innerWidth < 1000){
//     document.getElementById('service1').style.display = "none";
//     document.getElementById('service2').style.display = "block";
//   }
// }

// window.addEventListener("resize", myFunction);
// function myFunction() {
//   if (window.innerWidth > 999 ){
//     document.getElementById('service1').style.display = "block";
//     document.getElementById('service2').style.display = "block";
//   }


// }
document.addEventListener('click', function(event) {
  var dialog = document.getElementById('dialog-box');
  var callButton = document.getElementById('call-button');
  var closeButton = document.getElementById('close-button');
  if (event.target == callButton) {
    dialog.showModal();
  }
  else if (event.target == closeButton)  {
    dialog.close();
  } 
  else if (event.target !== dialog){
    dialog.close();
  }

});



const airconditioningButton = document.getElementById('Airconditioning-Service');
const electricalButton = document.getElementById('Electrical-service');
const service1 = document.getElementById('service1');
const service2 = document.getElementById('service2');
const screenWidth = window.innerWidth;

if (screenWidth >= 1000) {
  service1.style.display = 'block';
  service2.style.display = 'block';

  airconditioningButton.disabled = true;
  electricalButton.disabled = true;
}

let lastPressedService = service1;

airconditioningButton.addEventListener('click', () => {
  if (screenWidth < 1000) {
    service1.style.display = 'block';
    service2.style.display = 'none';
    lastPressedService = service1;
  }
});

electricalButton.addEventListener('click', () => {
  if (screenWidth < 1000) {
    service1.style.display = 'none';
    service2.style.display = 'block';
    lastPressedService = service2;
  }
});

window.addEventListener('resize', () => {
  const newScreenWidth = window.innerWidth;

  if (newScreenWidth >= 1000) {
    service1.style.display = 'block';
    service2.style.display = 'block';

    airconditioningButton.disabled = true;
    electricalButton.disabled = true;
  } else {
    airconditioningButton.disabled = false;
    electricalButton.disabled = false;

    if (lastPressedService === service1) {
      service1.style.display = 'block';
      service2.style.display = 'none';
    } else if (lastPressedService === service2) {
      service1.style.display = 'none';
      service2.style.display = 'block';
    }
  }
});
