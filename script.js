// 星空背景
function createStarrySky() {
  const canvas = document.getElementById("starCanvas");
  const ctx = canvas.getContext("2d");

  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  const stars = [];
  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      delta: Math.random() * 0.02
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let star of stars) {
      star.alpha += star.delta;
      if (star.alpha <= 0 || star.alpha >= 1) {
        star.delta = -star.delta;
      }
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
    }
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });
}

// 打字欢迎语
const welcomeMessage = "🌸 見に来てくれてありがとう！ゆっくりしていってね。";
let idx = 0;

function typeWriterEffect() {
  const target = document.createElement("p");
  target.id = "welcome";
  target.style.fontStyle = "italic";
  target.style.color = "#ffffff";
  target.style.marginTop = "10px";
  document.querySelector("header").appendChild(target);

  function type() {
    if (idx < welcomeMessage.length) {
      target.innerHTML += welcomeMessage.charAt(idx);
      idx++;
      setTimeout(type, 90);
    }
  }

  type();
}

// 趣味句子切换
const messages = [
  "🌱 たけのこの季節だね！",
  "🍚 たけのこご飯が食べたい〜",
  "🐼 パンダもきっと好きな味！",
  "🌀 でも今はコーディング中…",
  "🍵 たけのこと緑茶、最強コンビ！"
];

function changeMessage() {
  const random = Math.floor(Math.random() * messages.length);
  const messageP = document.getElementById("message");
  messageP.textContent = messages[random];
  messageP.style.transition = "color 0.3s ease";
  messageP.style.color = "#007acc";
  setTimeout(() => {
    messageP.style.color = "#333";
  }, 500);
}

// 控制台欢迎语
console.log("%cWelcome to Ran’s magical homepage! 🐑", "color: #007acc; font-weight: bold; font-size: 16px;");
console.log("%c『人生は、たけのこを食べるようなものです。』🍽️", "color: #e91e63; font-style: italic;");
console.log("%c...Enjoy your stay 🌟", "color: #888;");

// 页面加载后统一启动
window.onload = () => {
  createStarrySky();
  typeWriterEffect();

  const btn = document.querySelector("button");
  if (btn) {
    btn.addEventListener("click", changeMessage);
  }
};
