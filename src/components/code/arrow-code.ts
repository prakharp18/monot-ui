export const arrowFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Moving Arrow</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .arrow-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 500px;
      height: 300px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }

    .arrow-text {
      font-family: 'Courier New', monospace;
      font-size: 2.5rem;
      color: #fff;
      letter-spacing: 0.2em;
      user-select: none;
    }
  </style>
</head>
<body>
  <div class="arrow-container">
    <span class="arrow-text" id="arrow"></span>
  </div>

  <script>
    var TRAIL = ['→', '→→', '→→→', '→→→→', '→→→→→', '→→→→', '→→→', '→→', '→', ' '];
    var frame = 0;
    var el = document.getElementById('arrow');
    var speed = 400;

    setInterval(function() {
      el.textContent = TRAIL[frame] || '\\u00A0';
      frame = (frame + 1) % TRAIL.length;
    }, speed);
  </script>
</body>
</html>`

export const arrowHTML = `<div class="arrow-container">
  <span class="arrow-text" id="arrow"></span>
</div>`

export const arrowCSS = `.arrow-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 300px;
  background: #000;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
}

.arrow-text {
  font-family: 'Courier New', monospace;
  font-size: 2.5rem;
  color: #fff;
  letter-spacing: 0.2em;
  user-select: none;
}`

export const arrowJS = `var TRAIL = ['→', '→→', '→→→', '→→→→', '→→→→→', '→→→→', '→→→', '→→', '→', ' '];
var frame = 0;
var el = document.getElementById('arrow');
var speed = 400; // ms per frame

setInterval(function() {
  el.textContent = TRAIL[frame] || '\\u00A0';
  frame = (frame + 1) % TRAIL.length;
}, speed);`
