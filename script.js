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



function validateForm() {
  // get values
  const name = document.getElementById("Fname").value;
  const fname = document.getElementById("Fathername").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  // basic check
  if (!name || !fname || !email || !phone || !address) {
    alert("Please fill all fields");
    return false;
  }

  // save to localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("fname", fname);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("address", address);

  // redirect to card page
  window.location.href = "card.html";

  return false; // stop form submit
}


window.onload = function () {
  document.querySelector("#Cname strong").innerText =
    localStorage.getItem("name") || "";

  document.querySelector("#CfatherName strong").innerText =
    localStorage.getItem("fname") || "";

  document.querySelector("#Cnumber strong").innerText =
    localStorage.getItem("phone") || "";

  document.querySelector("#Caddress strong").innerText =
    localStorage.getItem("address") || "";
};


