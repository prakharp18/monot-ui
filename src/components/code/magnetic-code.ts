export const magneticFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Magnetic Cursor</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .magnetic-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 400px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }

    .magnetic-text {
      font-family: 'Courier New', monospace;
      font-size: 1.5rem;
      color: #fff;
      white-space: pre;
      user-select: none;
    }
  </style>
</head>
<body>
  <div class="magnetic-container">
    <pre class="magnetic-text" id="magnetic"></pre>
  </div>

  <script>
    var FRAMES = [
      '•       •',
      '  •   •  ',
      '    •    ',
      '  •   •  ',
      '•       •'
    ];
    var frame = 0;
    var el = document.getElementById('magnetic');
    var speed = 400;

    setInterval(function() {
      el.textContent = FRAMES[frame];
      frame = (frame + 1) % FRAMES.length;
    }, speed);
  </script>
</body>
</html>`

export const magneticHTML = `<div class="magnetic-container">
  <pre class="magnetic-text" id="magnetic"></pre>
</div>`

export const magneticCSS = `.magnetic-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background: #000;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
}

.magnetic-text {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  color: #fff;
  white-space: pre;
  user-select: none;
}`

export const magneticJS = `var FRAMES = [
  '•       •',
  '  •   •  ',
  '    •    ',
  '  •   •  ',
  '•       •'
];
var frame = 0;
var el = document.getElementById('magnetic');
var speed = 400; // ms per frame

setInterval(function() {
  el.textContent = FRAMES[frame];
  frame = (frame + 1) % FRAMES.length;
}, speed);`
