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

// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Hover for features and mockups
  document.querySelectorAll('[data-node]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const id = el.dataset.node;
      document.querySelectorAll(`.node[data-node="${id}"], .link[data-from="${id}"], .link[data-to="${id}"]`)
        .forEach(item => item.classList.add('highlighted'));
    });
    el.addEventListener('mouseleave', () => {
      const id = el.dataset.node;
      document.querySelectorAll(`.node[data-node="${id}"], .link[data-from="${id}"], .link[data-to="${id}"]`)
        .forEach(item => item.classList.remove('highlighted'));
    });
  });
});

// Auto-cycling Carousel
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel-slide');
  let current = 0;
  const total = slides.length;
  const interval = 4000; // 4 seconds per slide

  function updateCarousel() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[current].classList.add('active');
  }

  updateCarousel();
  setInterval(() => {
    current = (current + 1) % total;
    updateCarousel();
  }, interval);
});
