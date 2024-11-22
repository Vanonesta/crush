// Play music on page load
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.play();

// Change background color on button click
const body = document.body;
const heartButton = document.querySelector('.heart-button');
heartButton.addEventListener('click', () => {
  const colors = ['#ff9a9e', '#fad0c4', '#fccb90', '#a18cd1', '#fbc2eb'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.background = `linear-gradient(to bottom, ${randomColor}, #ffffff)`;
  generateHearts();
  generateBalloons();
});

// Generate floating hearts
const heartsContainer = document.querySelector('.hearts-container');
function generateHearts() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// Generate floating balloons
const balloonsContainer = document.querySelector('.balloons-container');
function generateBalloons() {
  for (let i = 0; i < 5; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = Math.random() * 2 + 5 + 's';
    balloonsContainer.appendChild(balloon);

    setTimeout(() => balloon.remove(), 5000);
  }
}

// CSS for hearts
const style = document.createElement('style');
style.textContent = `
  .heart {
    position: absolute;
    bottom: 0;
    width: 50px;
    height: 50px;
    background: red;
    clip-path: polygon(50% 0%, 61% 9%, 75% 26%, 84% 42%, 84% 61%, 73% 79%, 50% 100%, 27% 79%, 16% 61%, 16% 42%, 25% 26%, 39% 9%);
    animation: floatUp 5s ease-in-out infinite;
  }
`;
document.head.appendChild(style);