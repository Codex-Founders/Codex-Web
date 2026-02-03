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

// Show data from localStorage
document.getElementById('Cname').innerText = "Name: " + localStorage.getItem('name');
document.getElementById('Cfather').innerText = "Father: " + localStorage.getItem('father');
document.getElementById('Cphone').innerText = "Phone: " + localStorage.getItem('phone');
document.getElementById('Caddress').innerText = "Address: " + localStorage.getItem('address');

// Download card as image
document.getElementById('downloadBtn').addEventListener('click', () => {
    const card = document.getElementById('card');
    html2canvas(card).then(canvas => {
        const link = document.createElement('a');
        link.download = 'CodeX_ID_Card.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
