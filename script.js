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
      

function validateForm() {

  var Name = document.getElementById("Fname").value;
  var FatherName = document.getElementById("Fathername").value;
  var Email = document.getElementById("email").value;
  var Phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;

  if (
    Name === "" ||
    FatherName === "" ||
    Email === "" ||
    Phone === "" ||
    address === ""
  ) {
    alert("Please fill all the fields.");
    return false; 
  }

  alert("Form submitted successfully!");

  var reset = document.getElementById("myForm");
  reset.reset();

  return false;
}



// var cardName = document.getElementById("Cname").value;
// var CfatherName = document.getElementById("Cfathername").value;
// var cardNumber = document.getElementById("Cnumber").value;
// var Caddress = document.getElementById("Caddress").value;
// var Cphone = document.getElementById("Cphone").value;