let terminalText = "";
let c;
let ctx;
let cursorShown = true;
const charWidth = 18;
const renderStyle = 'html'; // canvas or text

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

const renderHTML = () => {
  c.innerHTML = '> ' + terminalText + '<span class="cursor">▮</span>';
}

const renderCanvas = () => {
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

const render = () => {
  if(renderStyle === 'canvas') {
    renderCanvas();
  }else {
    renderHTML();
  }
}


const init = () => { 
  // TODO: Need to hide/show appropriate termainl (currently rendering both)
  if(renderStyle === 'canvas') {
    c = document.getElementById("terminal");
    ctx = c.getContext("2d");
    setInterval(() => { cursorShown = !cursorShown; render(); }, 500);
  } else {
    c = document.getElementById("terminalText");
  }
  document.onkeydown = onKeyDown;
  render();
}

document.addEventListener("DOMContentLoaded", init);