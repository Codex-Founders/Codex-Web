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


