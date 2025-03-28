const circle = document.getElementById('circle');
const text = document.getElementById('text');

// Step 1: Expand the circle
setTimeout(() => {
  circle.classList.add('active');
}, 200);

// Step 2: Show the welcome text
setTimeout(() => {
  text.classList.add('visible');
}, 1800);

// Step 3: Hide the welcome text
setTimeout(() => {
  text.classList.remove('visible');
  text.classList.add('hidden');
}, 3500);

// Step 4: Collapse the circle
setTimeout(() => {
  circle.classList.remove('active');
  circle.classList.add('out');
}, 4000);

// Step 5: Redirect to index.html
setTimeout(() => {
  window.location.href = "index.html";
}, 5000);
