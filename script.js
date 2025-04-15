function changeMessage() {
  const messages = [
    "今日も頑張ろう！",
    "プログラミングは楽しいね！",
    "GitHub Pages、最高！",
    "HTMLとCSSをマスターしよう！"
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("message").textContent = messages[randomIndex];
}
```
