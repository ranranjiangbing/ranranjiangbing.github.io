const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const introLines = [
  "%cこんにちは、世界！🌏",
  "%cI'm Shuizen – a curious coder & creative soul.",
  "%c🔧 Skills: JavaScript | Python | HTML/CSS | Git",
  "%c🎯 Interests: Psychology × IT × Gender Studies",
  "%c💡 Motto: Code hard. Stay kind. Dream wild.",
  "%c📫 Contact: github.com/shuizen | Twitter: @shuizen_dev",
];

const styles = [
  "color: #00bcd4; font-size: 20px; font-weight: bold;",
  "color: #4caf50; font-size: 16px;",
  "color: #ff9800;",
  "color: #9c27b0;",
  "color: #e91e63; font-style: italic;",
  "color: #607d8b;"
];

(async () => {
  for (let i = 0; i < introLines.length; i++) {
    console.log(introLines[i], styles[i]);
    await sleep(600);
  }

  console.log("%c✨ Press F12 to say hi in code ✨", "color: gold; font-weight: bold; font-size: 14px;");
})();
