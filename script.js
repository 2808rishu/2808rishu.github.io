const body = document.body;
const handle = document.getElementById('handle');
const stringEl = document.getElementById('string');

let dragging = false;
let startY = 0;
let pullDist = 0;

const BASE_LEN = 100;   // initial string height
const MAX_PULL = 120;   // max drag in px
const THRESHOLD = 50;   // pull-to-toggle

function toggleLight() {
  body.classList.toggle('dark');
  body.classList.toggle('light');
}

// Start drag
handle.addEventListener('mousedown', e => {
  dragging = true;
  startY = e.clientY;
  handle.style.transition = 'none';
  stringEl.style.transition = 'none';
  document.body.style.userSelect = 'none';
});

// During drag
document.addEventListener('mousemove', e => {
  if (!dragging) return;
  pullDist = Math.min(Math.max(e.clientY - startY, 0), MAX_PULL);
  stringEl.style.height = BASE_LEN + pullDist + 'px';
  handle.style.top = BASE_LEN + pullDist + 'px';
});

// End drag
document.addEventListener('mouseup', () => {
  if (!dragging) return;
  dragging = false;
  document.body.style.userSelect = '';
  handle.style.transition = 'top 0.6s ease';
  stringEl.style.transition = 'height 0.6s ease';

  if (pullDist > THRESHOLD) {
    toggleLight();
  }

  // Return string & handle to base
  stringEl.style.height = BASE_LEN + 'px';
  handle.style.top = BASE_LEN + 'px';
});
