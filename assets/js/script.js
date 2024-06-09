'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

// Function to open the popup
function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function sendWhatsAppMessage(event) {
  event.preventDefault();
  
  const fullName = document.getElementById('fullName').value;
  const mobile = document.getElementById('mobile').value;
  const mobile2 = document.getElementById('mobile2').value || 'N/A';
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const country = document.getElementById('country').value;
  
  const message = `Booking Details:\n
  Full Name: ${fullName}\n
  Mobile: ${mobile}\n
  Mobile 2: ${mobile2}\n
  Email: ${email}\n
  Address: ${address}\n
  City: ${city}\n
  State: ${state}\n
  Country: ${country}`;
  
  const whatsappURL = `https://api.whatsapp.com/send?phone=+918275829980&text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
}

function sendWhatsAppMessageInquriy() {
  const car = document.getElementById('car-select').value;
  const pickup = document.getElementById('pickup-select').value;
  const dropoff = document.getElementById('dropoff-select').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;

  if (!car || !pickup || !dropoff || !checkin || !checkout) {
      alert('Please fill out all required fields.');
      return;
  }

  const message = `Hello Sir,I Want To Book This Car:\n Car: ${car}\nPick Up: ${pickup}\nDrop Off: ${dropoff}\nCheckin Date: ${checkin}\nCheckout Date: ${checkout}`;
  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://api.whatsapp.com/send?phone=+918275829980&text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
}
function sendEmailToWhatsApp() {
  const email = document.getElementById('email-input').value;

  if (!email) {
      alert('Please enter your email.');
      return;
  }

  const message = `Jay Bhole Tours This Site Is very Cool I Need
                   More Information Sir Please Send Me......:\n Email: ${email}`;
  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://api.whatsapp.com/send?phone=+918275829980&text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
}
const facebookLink = document.getElementById('facebook-link');

// Add event listener to handle click event
facebookLink.addEventListener('click', function(event) {
    // Prevent the default action (i.e., following the "#" link)
    event.preventDefault();
    
    // Replace the "#" with your actual Facebook link
    window.location.href = 'https://www.facebook.com/sachin.bhosle.984991?mibextid=ZbWKwL';
});
