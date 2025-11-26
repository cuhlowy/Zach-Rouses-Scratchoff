window.addEventListener('click', () => {
    const bgAudio = document.getElementById('bg-audio');
    if (bgAudio) {
       bgAudio.muted = false;
       bgAudio.volume = 0.3;
       bgAudio.play();
    }
 }, {
    once: true
 });
 
 const animalWords = document.querySelectorAll('.animal-word');
 const player = document.getElementById('sound-player');
 
 function triggerAnimation(elementId, animationName) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.style.opacity = '0';
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = `${animationName} 2s ease`;
    el.addEventListener('animationend', () => {
       el.style.animation = '';
    }, {
       once: true
    });
 }
 
 animalWords.forEach(word => {
    word.addEventListener('click', () => {
       const soundURL = word.dataset.sound;
       if (!soundURL) return;
 
       player.src = soundURL;
       player.volume = soundURL.includes('tiger-roar') ? 0.4 : 1.0;
 
       if (soundURL.includes('tiger-roar')) {
          triggerAnimation('tiger-paw', 'swipeLeft');
       } else if (soundURL.includes('bird') || soundURL.includes('chirp')) {
          triggerAnimation('jungle-bird', 'birdFlyLeft');
       } else if (soundURL.includes('snake') || soundURL.includes('hiss')) {
          triggerAnimation('jungle-snake', 'snakeSlideLeft');
       }
 
       player.play();
    });
 });
 
 // Leaves slide in
 let nextY = 0;
 let sideToggle = true;
 const leafSpacing = 140;
 
 document.addEventListener('click', (event) => {
    if (event.target.classList.contains('animal-word')) return;
 
    const leaf = document.createElement('img');
    leaf.src = 'img/leaf.png';
    leaf.className = 'slide-in-leaf';
 
    leaf.style.top = `${nextY}px`;
    nextY += leafSpacing;

    if (nextY + leafSpacing > window.innerHeight) {
       nextY = 0;
    }
 
    const fromLeft = sideToggle;
    sideToggle = !sideToggle;
    leaf.classList.add(fromLeft ? 'left' : 'right');
 
    document.body.appendChild(leaf);
 
    const leafSound = document.getElementById('leaf-sound');
    if (leafSound) {
       leafSound.currentTime = 0;
       leafSound.play();
    }
 });
 
 
 gsap.to("#wild", {
    keyframes: [{
          rotate: -2,
          skewX: 5,
          duration: 1
       },
       {
          rotate: 2,
          skewX: -4,
          duration: 1
       },
       {
          rotate: 0,
          skewX: 1,
          duration: 1
       }
    ],
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
 });