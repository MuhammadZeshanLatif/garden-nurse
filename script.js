document.getElementById('callbackForm').addEventListener('submit', function(e){e.preventDefault();document.getElementById('formMsg').textContent='Thank you! Your callback request has been received.';this.reset();});

var menuBtn = document.getElementById('menuBtn');
var header = document.querySelector('.site-header');

menuBtn.addEventListener('click', function() {
  var isOpen = header.classList.toggle('nav-open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('nav a').forEach(function(link) {
  link.addEventListener('click', function() {
    header.classList.remove('nav-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', function(e) {
  if (!header.contains(e.target)) {
    header.classList.remove('nav-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});
