export const pathFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Path Tracer</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .path-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 500px;
      height: 300px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }

    .path-text {
      font-family: 'Courier New', monospace;
      font-size: 1.5rem;
      color: #fff;
      letter-spacing: 0.2em;
      user-select: none;
    }
  </style>
</head>
<body>
  <div class="path-container">
    <span class="path-text" id="path"></span>
  </div>

  <script>
    var STEPS = ['.', '. .', '. . .', '. . . .', '. . . . .'];
    var step = 0;
    var total = STEPS.length + 2; // Extra frames for a pause at the end
    var el = document.getElementById('path');
    var speed = 300;

    setInterval(function() {
      el.textContent = step < STEPS.length ? STEPS[step] : STEPS[STEPS.length - 1];
      step = (step + 1) % total;
    }, speed);
  </script>
</body>
</html>`

export const pathHTML = `<div class="path-container">
  <span class="path-text" id="path"></span>
</div>`

export const pathCSS = `.path-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 300px;
  background: #000;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
}

.path-text {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  color: #fff;
  letter-spacing: 0.2em;
  user-select: none;
}`

export const pathJS = `var STEPS = ['.', '. .', '. . .', '. . . .', '. . . . .'];
var step = 0;
var total = STEPS.length + 2; // Extra frames for a pause at the end
var el = document.getElementById('path');
var speed = 300; // ms per step

setInterval(function() {
  el.textContent = step < STEPS.length ? STEPS[step] : STEPS[STEPS.length - 1];
  step = (step + 1) % total;
}, speed);`
