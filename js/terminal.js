let terminalText = "";
let c;
let ctx;
let cursorShown = true;
const charWidth = 18;

const onKeyDown = (e) => {
  const keyCode = e.keyCode;
  //TODO: This should be a switch
  // Enter
  if (keyCode === 13) {
    terminalText = "";
    render();
  } else if (keyCode === 8) {
    terminalText = terminalText.slice(0, -1);
    render();
  } else if ((keyCode >= 48 && keyCode <= 90) || keyCode === 32) {
    terminalText += e.key;
    render();
  }
}

const render = () => {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.font = "30px monospace";
  ctx.fillText(terminalText, 10, 50);

  //
  if (cursorShown) {
    ctx.beginPath();
    ctx.rect(charWidth * terminalText.length + 12, 22, 18, 30);
    ctx.fillStyle = "rgb(0,0,0,1)";
    ctx.fill();
  }
}


const init = () => { 
  c = document.getElementById("terminal");
  ctx = c.getContext("2d");
  document.onkeydown = onKeyDown;
  render();
  setInterval(() => { cursorShown = !cursorShown; render(); }, 500);
}

document.addEventListener("DOMContentLoaded", init);