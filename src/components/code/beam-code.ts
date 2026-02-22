export const beamFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Scanning Beam</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .beam-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 500px;
      height: 300px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }

    .beam-text {
      font-family: 'Courier New', monospace;
      font-size: 1.5rem;
      color: #fff;
      letter-spacing: 0.1em;
      user-select: none;
    }
  </style>
</head>
<body>
  <div class="beam-container">
    <span class="beam-text" id="beam"></span>
  </div>

  <script>
    var FRAMES = [
      '[\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588]',
      '[\\u2591\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588]',
      '[\\u2591\\u2591\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588]',
      '[\\u2591\\u2591\\u2591\\u2588\\u2588\\u2588\\u2588\\u2588]',
      '[\\u2591\\u2591\\u2591\\u2591\\u2588\\u2588\\u2588\\u2588]',
      '[\\u2591\\u2591\\u2591\\u2591\\u2591\\u2588\\u2588\\u2588]',
      '[\\u2591\\u2591\\u2591\\u2591\\u2591\\u2591\\u2588\\u2588]',
      '[\\u2591\\u2591\\u2591\\u2591\\u2591\\u2591\\u2591\\u2588]',
      '[\\u2591\\u2591\\u2591\\u2591\\u2591\\u2591\\u2591\\u2591]',
      '[\\u2588\\u2591\\u2591\\u2591\\u2591\\u2591\\u2591\\u2591]',
      '[\\u2588\\u2588\\u2591\\u2591\\u2591\\u2591\\u2591\\u2591]',
      '[\\u2588\\u2588\\u2588\\u2591\\u2591\\u2591\\u2591\\u2591]',
      '[\\u2588\\u2588\\u2588\\u2588\\u2591\\u2591\\u2591\\u2591]',
      '[\\u2588\\u2588\\u2588\\u2588\\u2588\\u2591\\u2591\\u2591]',
      '[\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588\\u2591\\u2591]',
      '[\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588\\u2591]'
    ];
    var frame = 0;
    var el = document.getElementById('beam');
    var speed = 80;

    setInterval(function() {
      el.textContent = FRAMES[frame];
      frame = (frame + 1) % FRAMES.length;
    }, speed);
  </script>
</body>
</html>`

export const beamHTML = `<div class="beam-container">
  <span class="beam-text" id="beam"></span>
</div>`

export const beamCSS = `.beam-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 300px;
  background: #000;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
}

.beam-text {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  color: #fff;
  letter-spacing: 0.1em;
  user-select: none;
}`

export const beamJS = `var FRAMES = [
  '[████████]',
  '[░███████]',
  '[░░██████]',
  '[░░░█████]',
  '[░░░░████]',
  '[░░░░░███]',
  '[░░░░░░██]',
  '[░░░░░░░█]',
  '[░░░░░░░░]',
  '[█░░░░░░░]',
  '[██░░░░░░]',
  '[███░░░░░]',
  '[████░░░░]',
  '[█████░░░]',
  '[██████░░]',
  '[███████░]'
];
var frame = 0;
var el = document.getElementById('beam');
var speed = 80; // ms per frame

setInterval(function() {
  el.textContent = FRAMES[frame];
  frame = (frame + 1) % FRAMES.length;
}, speed);`
