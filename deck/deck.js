const slides = document.querySelectorAll('.slide');
const total = slides.length;
let current = 0;

const counter = document.getElementById('slideCounter');
const progress = document.getElementById('progressBar');

function goTo(index) {
  if (index < 0 || index >= total) return;
  const goingBack = index < current;
  slides[current].classList.remove('active');
  // Set direction hint before making active
  slides[index].classList.toggle('going-back', goingBack);
  // Force reflow so the starting transform applies before transition
  void slides[index].offsetWidth;
  current = index;
  slides[current].classList.add('active');
  counter.textContent = `${current + 1} / ${total}`;
  progress.style.width = `${((current + 1) / total) * 100}%`;
}

document.addEventListener('keydown', (e) => {
  // Don't navigate slides while lightbox is open
  const lbEl = document.getElementById('deckLightbox');
  if (lbEl && lbEl.classList.contains('open')) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    e.preventDefault();
    goTo(current + 1);
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    goTo(current - 1);
  }
  if (e.key === 'Home' || e.key === 'r' || e.key === 'R') goTo(0);
  if (e.key === 'End') goTo(total - 1);
});

progress.style.width = `${(1 / total) * 100}%`;

// Fullscreen toggle
const fsBtn = document.getElementById('fullscreenBtn');
fsBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

// Reset button (visible on last slide)
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => goTo(0));

// Show/hide reset button based on slide
const origGoTo = goTo;
goTo = function(index) {
  origGoTo(index);
  resetBtn.classList.toggle('visible', current === total - 1);
};
goTo(0);

// === FUN FACT REVEAL ===
const funFact = document.getElementById('funFact');
const funFactBtn = document.getElementById('funFactBtn');
if (funFactBtn) {
  funFactBtn.addEventListener('click', () => {
    funFact.classList.toggle('revealed');
    // Also toggle book ticker visibility on the slide-inner
    funFact.closest('.slide-inner').classList.toggle('fun-fact-revealed');
  });
}

// === LIGHTBOX ===
const lb = document.getElementById('deckLightbox');
const lbImg = document.getElementById('deckLbImg');
const lbClose = document.getElementById('deckLbClose');

function openLightbox(src, alt) {
  lbImg.src = src;
  lbImg.alt = alt || '';
  lb.classList.add('open');
}
function closeLightbox() {
  lb.classList.remove('open');
}

// Mark all img-boxes with real images as zoomable, attach click
document.querySelectorAll('.img-box').forEach(box => {
  const img = box.querySelector('img[src]:not([src=""])');
  if (!img) return;
  if (box.closest('.headshot')) return;
  box.classList.add('zoomable');
  box.addEventListener('click', () => openLightbox(img.src, img.alt));
});

lbClose.addEventListener('click', closeLightbox);
lb.addEventListener('click', (e) => {
  if (e.target === lb) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lb.classList.contains('open')) {
    closeLightbox();
    e.stopPropagation();
  }
});
