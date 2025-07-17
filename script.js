const body = document.body;
const handle = document.getElementById('handle');

handle.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
});
