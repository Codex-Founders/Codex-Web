var menu = document.getElementById("courseMenu");

function show() {
  menu.style.display = "block";
}

function hide() {
  menu.style.display = "none";
}

const texts = ["Web Development", "Graphic Designing", "Data Science", "Cyber Security"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0; // loop back
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing-text').textContent = letter;
 
  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      type();
    }, 1500); // pause before next word
  } else {
    setTimeout(type, 150); // typing speed
  }
})()


var Name = document.getElementById("Fname").value;
var FatherName = document.getElementById("Fathername").value;
var Email = document.getElementById("email").value;
var Phone = document.getElementById("phone").value;
var address = document.getElementById("address").value;
      

// ==== FORM PAGE JS ====

// Validate form and save data before redirect
function validateForm() {
  // Get input values
  const Name = document.getElementById("Fname").value.trim();
  const FatherName = document.getElementById("Fathername").value.trim();
  const Phone = document.getElementById("phone").value.trim();
  const Address = document.getElementById("address").value.trim();

  // Basic validation
  if (!Name || !FatherName || !Phone || !Address) {
    alert("Please fill all the fields.");
    return false; // Stop submit
  }

  // Phone number must be exactly 11 digits
  if (Phone.length !== 11) {
    alert("Phone number must be exactly 11 digits.");
    return false;
  }

  // Save to localStorage
  localStorage.setItem("Name", Name);
  localStorage.setItem("FatherName", FatherName);
  localStorage.setItem("Phone", Phone);
  localStorage.setItem("Address", Address);

  // Redirect to card page
  window.location.href = "card.html";
  return false; // Prevent default form submission
}

// ==== CARD PAGE JS ====

// Populate card with data from localStorage
function populateCard() {
  const cardName = document.getElementById("Cname");
  const cardFather = document.getElementById("CfatherName");
  const cardPhone = document.getElementById("Cnumber");
  const cardAddress = document.getElementById("Caddress");

  // Check if elements exist (safety)
  if (!cardName || !cardFather || !cardPhone || !cardAddress) return;

  // Set values from localStorage, fallback to default
  cardName.textContent = localStorage.getItem("Name") || "Mudassir Shaikh";
  cardFather.textContent = localStorage.getItem("FatherName") || "Mr. Qureshi";
  cardPhone.textContent = localStorage.getItem("Phone") || "0300-1234567";
  cardAddress.textContent = localStorage.getItem("Address") || "Korangi-gulshan-e-sikander karachi";
}

// Run populate on page load
window.addEventListener("DOMContentLoaded", populateCard);

