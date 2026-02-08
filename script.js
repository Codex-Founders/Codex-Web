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
    count = 0; 
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing-text').textContent = letter;
 
  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      type();
    }, 1500);
  } else {
    setTimeout(type, 150); 
  }
})()



function show() {
  document.getElementById("courseMenu").style.display = "block";
}

function hide() {
  document.getElementById("courseMenu").style.display = "none";
}




const form = document.getElementById("myForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("father", document.getElementById("Fathername").value);
    localStorage.setItem("phone", document.getElementById("phone").value);
    localStorage.setItem("address", document.getElementById("address").value);

    window.location.href = "card.html";
  });
}


// LOAD DATA ON CARD

if (document.getElementById("card")) {
  document.getElementById("cname").innerText = localStorage.getItem("name");
  document.getElementById("cfather").innerText = localStorage.getItem("father");
  document.getElementById("cphone").innerText = localStorage.getItem("phone");
  document.getElementById("caddress").innerText = localStorage.getItem("address");
}


// DOWNLOAD CARD

const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    html2canvas(document.getElementById("card")).then(canvas => {
      const a = document.createElement("a");
      a.href = canvas.toDataURL();
      a.download = "CodeX-ID-Card.png";
      a.click();
    });
  });
}

