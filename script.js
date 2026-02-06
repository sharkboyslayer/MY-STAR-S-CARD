// Basic Information
const valentineName = "MYA";
document.title = "Will You Be My Valentine? ♡";

// Questions & hidden messages
const questions = [
  {
    text: "Do you love me?",
    yesBtn: "Yes",
    noBtn: "No..",
    hiddenMessage: "One out of the many reasons I love you. You shine like the brightest star in the nightsky and help guide souls to need help or comfort."
  },
  {
    text: "How much do you love me?(๑>◡<๑)",
    yesBtn: "Very much!",
    noBtn: "As much as I love my big toe",
    hiddenMessage: "I am the evermost grateful for your love and caring."
  },
  {
    text: "Would maybe...possibly answer my next question for me?ꉂ(˵˃ ᗜ ˂˵)",
    yesBtn: "Yes ofc!",
    noBtn: "No..never you stinky person..ew",
    hiddenMessage: "Another out of many of the reasons I love you. You're such a beautiful and radiant soul. I wish that we keep meeting in our different lifetimes."
  },
  {
    text: "Will you be my Valentine...?",
    yesBtn: "Yes!",
    noBtn: "No",
    hiddenMessage: ""
  }
];

let currentQuestion = 0;
const questionTitle = document.getElementById('question-title');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const hiddenMessageDiv = document.getElementById('hidden-message');
const nextBtn = document.getElementById('next-btn');

// Display current question
function showQuestion() {
  const q = questions[currentQuestion];
  questionTitle.innerText = q.text;
  yesBtn.innerText = q.yesBtn;
  noBtn.innerText = q.noBtn;
  hiddenMessageDiv.innerText = '';
  nextBtn.style.display = 'none';
}

// Handle Yes button
yesBtn.addEventListener('click', () => {
  const q = questions[currentQuestion];
  hiddenMessageDiv.innerText = q.hiddenMessage || '';
  nextBtn.style.display = 'none';
  // Show next button after 20 seconds
  setTimeout(() => {
    nextBtn.style.display = 'inline-block';
  }, 20000);
});

// Handle No button (move to next immediately)
noBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showCelebration();
  } else {
    showQuestion();
  }
});

// Next button
nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showCelebration();
  } else {
    showQuestion();
  }
});

// Music controls
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.innerText = "🔇 Stop Music";
  } else {
    bgMusic.pause();
    musicBtn.innerText = "🎵 Play Music";
  }
});

// Final celebration
function showCelebration() {
  document.body.innerHTML = `
    <h1>Yay! I'm the luckiest person...</h1>
    <p>Thank you so much for gracing my life with your presence and light.</p>
    <div style="font-size: 40px;">💐🌸💞💗💋🫂</div>
  `;
}

// Initialize first question
showQuestion();
