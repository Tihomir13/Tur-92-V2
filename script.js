const header = document.querySelector('.header');
const currentYear = new Date().getFullYear();

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
});

function updateYear() {
  const el = document.querySelector('.year');
  if (el) el.textContent = currentYear;
}

updateYear();
