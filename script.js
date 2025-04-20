// script.js
console.log("Living Archives is ready.");
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('modal-close');
  const titleEl = document.getElementById('modal-title');
  const descEl = document.getElementById('modal-description');
  const imgEl = document.getElementById('modal-image');

  document.querySelectorAll('.mockup-image').forEach(container => {
    container.addEventListener('click', () => {
      const img = container.querySelector('img');
      const caption = container.querySelector('p').textContent;

      // Populate modal
      titleEl.textContent = img.alt;
      descEl.textContent = caption;
      imgEl.src = img.src;
      imgEl.alt = img.alt;

      modal.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Close when clicking outside content
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});
