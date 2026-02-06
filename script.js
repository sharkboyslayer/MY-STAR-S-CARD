// ------------------ CONFIG ------------------
const config = {
  valentineName: "MYA",
  pageTitle: "Will You Be My Valentine? ♡",
  floatingEmojis: {
    heartsAndEmojicons: ['❤︎', 'ꉂ(˵˃ ᗜ ˂˵)', '۶ৎ', '💗', '❀'],
    animals: ['🧸', '🪼']
  },
  questions: [
    {
      text: "Do you love me?",
      yesBtn: "Yes",
      noBtn: "No..",
      secretAnswer: "One out of the many reasons I love you. You shine like the brightest star in the nightsky and help guide souls to need help or comfort."
    },
    {
      text: "How much do you love me?(๑>◡<๑)",
      yesBtn: "Very much!",
      noBtn: "as much as I love my big toe"
    },
    {
      text: "Would maybe...possibly answer my next question for me?ꉂ(˵˃ ᗜ ˂˵)",
      yesBtn: "Yes ofc!",
      noBtn: "No..never you stinky person..ew",
      secretAnswer: "Another out of many of the reasons I love you. You're such a beautiful and radient soul. I wish that we keep meeting in our different lifetimes."
    },
    {
      text: "Will you be my Valentine...?",
      yesBtn: "Yes!",
      noBtn: "No"
    }
  ],
  loveMessages: {
    extreme: "WOOOOW You love me that much? (๑>◡<๑)",
    high: "I the evermost greatful for your love and caring.",
    normal: "You forever dazzle me my star"
  },
  celebration: {
    title: "Yay! I'm the luckiest person...",
    message: "Thank you so much for gracing my life with your presence and light.",
    emojis: "💐🌸💞💗💋🫂"
  },
  colors: {
    backgroundStart: "#EC6ABE",
    backgroundEnd: "#FDE09C",
    buttonBackground: "#ff6b6b",
    buttonHover: "#420C14",
    textColor: "#DB2955"
  },
  animations: {
    floatDuration: 15, // seconds
    floatDistance: 50
  },
  music: {
    enabled: true,
    autoplay: true,
    musicUrl: "https://res.cloudinary.com/dx6ryp7rl/video/upload/v1770355133/Cults_-_Always_Forever_a_l_b_u_m_-_Static__mp3.pm_qfyi5i.mp3",
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5
  },
};

// ------------------ VARIABLES ------------------
let currentQuestion = 0;
const questionText = document.getElementById("questionText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const hiddenMessageDiv = document.getElementById("hiddenMessage");
const loveMeterMessageDiv = document.getElementById("loveMeterMessage");
const celebrationDiv = document.getElementById("celebration");
const celebrationTitle = document.getElementById("celebrationTitle");
const celebrationMessage = document.getElementById("celebrationMessage");
const celebrationEmojis = document.getElementById("celebrationEmojis");
const floatingContainer = document.querySelector(".floating-container");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

// ------------------ FLOATING EMOJIS ------------------
function createFloatingEmoji(char) {
  const emoji = document.createElement("div");
  emoji.textContent = char;
  emoji.classList.add("floating-emoji");
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.animationDuration = `${config.animations.floatDuration + Math.random() * 5}s`;
  floatingContainer.appendChild(emoji);
}

// Add floating emojis
[...config.floatingEmojis.heartsAndEmojicons, ...config.floatingEmojis.animals].forEach(emoji => {
  for (let i = 0; i < 5; i++) createFloatingEmoji(emoji);
});

// ------------------ QUESTIONS ------------------
function showQuestion(index) {
  if (index >= config.questions.length) {
    showCelebration();
    return;
  }
  const q = config.questions[index];
  questionText.textContent = q.text;
  yesBtn.textContent = q.yesBtn || "Yes";
  noBtn.textContent = q.noBtn || "No";
  hiddenMessageDiv.classList.add("hidden");
}

function showHiddenMessage(message) {
  hiddenMessageDiv.textContent = message;
  hiddenMessageDiv.classList.remove("hidden");
  setTimeout(() => hiddenMessageDiv.classList.add("hidden"), 12000); // hide after 12 seconds
}

function nextQuestion(delay = 0) {
  setTimeout(() => {
    currentQuestion++;
    showQuestion(currentQuestion);
  }, delay);
}

function showCelebration() {
  celebrationTitle.textContent = config.celebration.title;
  celebrationMessage.textContent = config.celebration.message;
  celebrationEmojis.textContent = config.celebration.emojis;
  celebrationDiv.classList.remove("hidden");
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
}

// ------------------ EVENT LISTENERS ------------------
yesBtn.addEventListener("click", () => {
  const q = config.questions[currentQuestion];
  if (q.secretAnswer) showHiddenMessage(q.secretAnswer);
});

noBtn.addEventListener("click", () => nextQuestion(2000)); // move to next question after 2s

// ------------------ MUSIC ------------------
if (config.music.enabled) {
  bgMusic.src = config.music.musicUrl;
  bgMusic.volume = config.music.volume;
  musicBtn.classList.remove("hidden");
  musicBtn.textContent = config.music.startText;

  musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicBtn.textContent = config.music.stopText;
    } else {
      bgMusic.pause();
      musicBtn.textContent = config.music.startText;
    }
  });

  if (config.music.autoplay) bgMusic.play().catch(() => {}); // may block autoplay in browsers
}

// ------------------ INIT ------------------
document.title = config.pageTitle;
showQuestion(currentQuestion);
