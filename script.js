// ============================================================
//  Code X Academy — script.js
//  Handles: particles, navbar, dropdown, typing, form,
//           card data load, and ID card download
// ============================================================

/* ── 1. PARTICLES ── */
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left              = Math.random() * 100 + '%';
    p.style.animationDelay    = Math.random() * 20 + 's';
    p.style.animationDuration = (15 + Math.random() * 10) + 's';
    container.appendChild(p);
  }
}
createParticles();


/* ── 2. NAVBAR SCROLL ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}


/* ── 3. MOBILE MENU TOGGLE ── */
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('show');
  });
}


/* ── 4. COURSE DROPDOWN ── */
const dropdown   = document.getElementById('dropdown');
const courseMenu = document.getElementById('courseMenu');
if (dropdown && courseMenu) {
  dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    courseMenu.classList.toggle('show');
  });
  document.addEventListener('click', () => courseMenu.classList.remove('show'));
}


/* ── 5. TYPING EFFECT (index.html) ── */
const typingEl = document.querySelector('.typing-text');
if (typingEl) {
  const texts = ['Web Development', 'Graphic Designing', 'Data Science', 'Cyber Security'];
  let count = 0, index = 0;

  (function type() {
    if (count === texts.length) count = 0;
    const currentText = texts[count];
    const letter      = currentText.slice(0, ++index);
    typingEl.textContent = letter;

    if (letter.length === currentText.length) {
      setTimeout(() => { index = 0; count++; type(); }, 1500);
    } else {
      setTimeout(type, 150);
    }
  })();
}


/* ── 6. REGISTRATION FORM (reg-form.html) ── */
const form = document.getElementById('myForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    localStorage.setItem('Cphone',   document.getElementById('phone').value);
    localStorage.setItem('Cname',    document.getElementById('name').value);
    localStorage.setItem('Cfather',  document.getElementById('Fathername').value);
    localStorage.setItem('Caddress', document.getElementById('address').value);
    window.location.href = 'card.html';
  });
}


/* ── 7. CARD DATA LOAD (card.html) ── */
// Firebase is already handled inline in card.html.
// This block is a fallback: if Firebase didn't run (e.g. offline),
// it fills from localStorage so the card is never blank.
document.addEventListener('DOMContentLoaded', () => {
  const nameEl    = document.getElementById('studentName');
  const fatherEl  = document.getElementById('fatherName');
  const contactEl = document.getElementById('contactNum');
  const addressEl = document.getElementById('addressLoc');

  if (!nameEl) return; // not on card page

  // Only fill from localStorage if Firebase left the placeholder text
  function fillIfEmpty(el, key) {
    if (el && (!el.textContent || el.textContent.trim() === el.id.replace(/([A-Z])/g, ' $1').trim())) {
      const val = localStorage.getItem(key);
      if (val) el.textContent = val;
    }
  }

  // Give Firebase's async call a moment, then patch any blanks
  setTimeout(() => {
    fillIfEmpty(nameEl,    'Cname');
    fillIfEmpty(fatherEl,  'Cfather');
    fillIfEmpty(contactEl, 'Cphone');
    fillIfEmpty(addressEl, 'Caddress');
  }, 2000);
});


/* ── 8. DOWNLOAD ID CARD (card.html) ── */
const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    const cardCapture = document.getElementById('cardCapture');
    if (!cardCapture) { alert('Card element not found!'); return; }

    // Temporarily add a capture class so html2canvas has a solid background
    cardCapture.classList.add('capturing');
    downloadBtn.disabled    = true;
    downloadBtn.innerHTML   = '<i class="fas fa-spinner fa-spin"></i> <span>Generating…</span>';

    html2canvas(cardCapture, {
      backgroundColor: '#0d0000',
      scale: 2,          // 2× resolution → crisp PNG
      useCORS: true,     // allow cross-origin images (logo, QR)
      allowTaint: false,
      logging: false
    }).then(canvas => {
      const a      = document.createElement('a');
      a.href       = canvas.toDataURL('image/png');
      a.download   = 'CodeX-ID-Card.png';
      a.click();
    }).catch(err => {
      console.error('html2canvas error:', err);
      alert('Download failed. Check console for details.');
    }).finally(() => {
      cardCapture.classList.remove('capturing');
      downloadBtn.disabled  = false;
      downloadBtn.innerHTML = '<i class="fas fa-download"></i> <span>Download ID Card</span>';
    });
  });
}