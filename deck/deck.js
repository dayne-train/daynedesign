const slides = document.querySelectorAll('.slide');
const total = slides.length;
let current = 0;

const counter = document.getElementById('slideCounter');
const progress = document.getElementById('progressBar');

function goTo(index) {
  if (index < 0 || index >= total) return;
  slides[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  counter.textContent = `${current + 1} / ${total}`;
  progress.style.width = `${((current + 1) / total) * 100}%`;
}

document.addEventListener('keydown', (e) => {
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
