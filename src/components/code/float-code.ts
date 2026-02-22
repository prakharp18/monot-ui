export const floatFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Particle Field</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .float-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 300px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }
    .float-frame {
      font-family: 'Courier New', monospace;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.8);
      white-space: pre;
      line-height: 1.5;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="float-container">
    <pre class="float-frame" id="float"></pre>
  </div>

  <script>
    var frames = [
      '\\u2022     \\u2022\\n   \\u2022   \\n      \\u2022\\n  \\u2022    ',
      ' \\u2022     \\n  \\u2022 \\u2022  \\n     \\u2022 \\n \\u2022     ',
      '   \\u2022   \\n \\u2022   \\u2022 \\n    \\u2022  \\n\\u2022      ',
      '    \\u2022  \\n\\u2022     \\u2022\\n   \\u2022   \\n  \\u2022    ',
    ];
    var i = 0;
    var el = document.getElementById('float');
    setInterval(function() {
      el.textContent = frames[i];
      i = (i + 1) % frames.length;
    }, 800);
  </script>
</body>
</html>`

export const floatHTML = `<div class="float-container">
  <pre class="float-frame" id="float"></pre>
</div>`

export const floatCSS = `.float-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  background: #000;
}

.float-frame {
  font-family: 'Courier New', monospace;
  font-size: 1.25rem;
  color: rgba(255,255,255,0.8);
  white-space: pre;
  line-height: 1.5;
  text-align: center;
}`

export const floatJS = `var frames = [
  '\\u2022     \\u2022\\n   \\u2022   \\n      \\u2022\\n  \\u2022    ',
  ' \\u2022     \\n  \\u2022 \\u2022  \\n     \\u2022 \\n \\u2022     ',
  '   \\u2022   \\n \\u2022   \\u2022 \\n    \\u2022  \\n\\u2022      ',
  '    \\u2022  \\n\\u2022     \\u2022\\n   \\u2022   \\n  \\u2022    ',
];
var i = 0;
var el = document.getElementById('float');
setInterval(function() {
  el.textContent = frames[i];
  i = (i + 1) % frames.length;
}, 800);`
