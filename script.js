const body = document.body;
const handle = document.getElementById('handle');
const stringEl = document.getElementById('string');

let dragging = false;
let startY = 0;
let pullDist = 0;

const MAX_PULL = 100;      // max drag in px
const THRESHOLD = 60;      // trigger point
const BASE_LEN = 150;      // initial string height

function toggleLight() {
  body.classList.toggle('dark');
  body.classList.toggle('light');
}

// Start dragging
handle.addEventListener('mousedown', e => {
  dragging = true;
  startY = e.clientY;
  handle.style.transition = 'none';
  stringEl.style.transition = 'none';
  document.body.style.userSelect = 'none';
});

// Track drag
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
  handle.style.cursor = 'grab';
  document.body.style.userSelect = '';

  if (pullDist > THRESHOLD) {
    toggleLight();
  }

  // Animate string & handle back to base
  handle.style.transition = 'top 0.6s ease';
  stringEl.style.transition = 'height 0.6s ease';
  stringEl.style.height = BASE_LEN + 'px';
  handle.style.top = BASE_LEN + 'px';
});
