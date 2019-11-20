function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


const audio1 = document.getElementById("volume1");
audio1.volume = 0.2;
const audio2 = document.getElementById("volume2");
audio2.volume = 0.2;
const audio3 = document.getElementById("volume3");
audio3.volume = 0.2;
const audio4 = document.getElementById("volume4");
audio4.volume = 0.2;
const audio5 = document.getElementById("volume5");
audio5.volume = 0.2;
const audio6 = document.getElementById("volume6");
audio6.volume = 0.2;
const audio7 = document.getElementById("volume7");
audio7.volume = 0.2;
const audio8 = document.getElementById("volume8");
audio8.volume = 0.2;
const audio9 = document.getElementById("volume8");
audio9.volume = 0.2;
