// CONFETTI LOGIC -----------------------------------------

const scratchToggle = document.getElementById('scratch-toggle');
const confettiContainer = document.querySelector('.confetti-container');

function launchConfetti() {
  if (!confettiContainer) return;

  // clear any old confetti
  confettiContainer.innerHTML = '';

  const colors = ['#FFD54F', '#FF5252', '#40C4FF', '#69F0AE', '#FF80AB'];

  // MANY pieces, bigger party
  for (let i = 0; i < 180; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');

    // random horizontal spread around the center (from about 30% to 70% of width)
    const spreadPercent = 30 + Math.random() * 40; // 30–70%
    piece.style.left = spreadPercent + '%';

    // random color
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // slower, varied timing
    piece.style.animationDuration = 2.8 + Math.random() * 1.6 + 's';
    piece.style.animationDelay = Math.random() * 0.5 + 's';

    confettiContainer.appendChild(piece);
  }

  // remove after animations
  setTimeout(() => {
    confettiContainer.innerHTML = '';
  }, 4000);
}

if (scratchToggle) {
  scratchToggle.addEventListener('change', () => {
    if (scratchToggle.checked) {
      launchConfetti();
    }
  });
}
