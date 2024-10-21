const surpriseBtn = document.getElementById('surpriseBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const bgMusic = document.getElementById('bgMusic');

surpriseBtn.addEventListener('click', () => {
  popup.classList.remove('hidden');
  bgMusic.play();
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
  bgMusic.pause();  // Hentikan musik
  bgMusic.currentTime = 0;  // Reset musik ke awal
});
