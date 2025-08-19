function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function openDrawer(id) {
  document.getElementById(id).classList.add('active');
  setTimeout(() => {
    document.addEventListener('click', closeDrawerOutside, { once: true });
  }, 100);
}

function closeDrawerOutside(e) {
  if (!e.target.closest('.drawer')) {
    document.querySelectorAll('.drawer').forEach(d => d.classList.remove('active'));
  }
}

function addToCart() {
  alert('محصول به سبد خرید اضافه شد!');
}