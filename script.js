// Configuration
const config = {
  valentineName: "MYA",
  questions: [
    {
      text: "Do you love me?",
      yesBtn: "Yes",
      noBtn: "No..",
      secretAnswer: "One out of the many reasons I love you. You shine like the brightest star in the night'sky and help guide souls who need help or comfort."
    },
    {
      text: "How much do you love me?(๑>◡<๑)",
      yesBtn: "Very much!",
      noBtn: "as much as I love my big toe",
      secretAnswer: "You and everything about you is delicate, happy and calming. Like a beautiful field of flowers in spring."
    },
    {
      text: "Would you maybe...possibly answer my next question for me?ꉂ(˵˃ ᗜ ˂˵)",
      yesBtn: "Yes ofc!",
      noBtn: "No..never you stinky person..ew",
      secretAnswer: "Another out of many of the reasons I love you. You're such a beautiful and radiant soul. I wish that we keep meeting in our different lifetimes."
    },
    {
      text: "Will you be my Valentine...?",
      yesBtn: "Yes!",
      noBtn: "No",
      secretAnswer: "I'm the luckiest person ever 'dances'."
    }
  ],
  floatingEmojis: ['❤︎', 'ꉂ(˵˃ ᗜ ˂˵)', '۶ৎ', '💗', '❀', '🧸', '🪼'],
  musicUrl: "https://res.cloudinary.com/dx6ryp7rl/video/upload/v1770355133/Cults_-_Always_Forever_a_l_b_u_m_-_Static__mp3.pm_qfyi5i.mp3",
};

// State
let currentQuestion = 0;
const questionTitle = document.getElementById("questionTitle");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const hiddenMessage = document.getElementById("hiddenMessage");

// Music
const audio = new Audio(config.musicUrl);
let musicPlaying = false;
const musicBtn = document.getElementById("musicBtn");
musicBtn.addEventListener("click", () => {
  if (!musicPlaying) {
    audio.volume = 0.5;
    audio.play();
    musicBtn.textContent = "🔇 Stop Music";
  } else {
    audio.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
  musicPlaying = !musicPlaying;
});

// Floating Emojis
const floatingContainer = document.getElementById("floatingEmojis");
function createFloatingEmojis() {
  config.floatingEmojis.forEach((emoji, i) => {
    const span = document.createElement("span");
    span.className = "floatingEmoji";
    span.textContent = emoji;
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * 100 + "vh";
    span.style.fontSize = 20 + Math.random() * 30 + "px";
    span.style.animationDuration = 10 + Math.random() * 10 + "s";
    floatingContainer.appendChild(span);
  });
}
createFloatingEmojis();

// Show current question
function showQuestion() {
  const q = config.questions[currentQuestion];
  questionTitle.textContent = q.text;
  yesBtn.textContent = q.yesBtn;
  noBtn.textContent = q.noBtn;
  hiddenMessage.textContent = "";
}

// Button Handlers
yesBtn.addEventListener("click", () => {
  const secret = config.questions[currentQuestion].secretAnswer || "";
  hiddenMessage.textContent = secret;
  yesBtn.disabled = true;
  noBtn.disabled = true;

  setTimeout(() => {
    nextQuestion();
  }, 10000); // 10 seconds to read hidden message
});

noBtn.addEventListener("click", () => {
  yesBtn.disabled = true;
  noBtn.disabled = true;
  setTimeout(() => {
    nextQuestion();
  }, 2000); // 2 seconds delay for No
});

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= config.questions.length) {
    questionTitle.textContent = "🎉 YAYYY! 🎉";
    hiddenMessage.textContent = "Thank you so much for gracing my life with your presence and light. 💐🌸💞💗💋🫂";
    document.getElementById("buttons").style.display = "none";
  } else {
    showQuestion();
    yesBtn.disabled = false;
    noBtn.disabled = false;
  }
}

// Initial load
showQuestion();
