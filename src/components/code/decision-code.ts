export const decisionFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Decision Split</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .decision-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 300px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }
    .decision-frame {
      font-family: 'Courier New', monospace;
      font-size: 1.25rem;
      color: #fff;
      white-space: pre;
      line-height: 1;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="decision-container">
    <pre class="decision-frame" id="decision"></pre>
  </div>

  <script>
    var frames = [
      '  \\u2022  \\n     \\n     \\n     \\n     ',
      '     \\n / \\\\ \\n     \\n \\\\ / \\n     ',
      '     \\n     \\n\\u2022   \\u2022\\n     \\n     ',
      '     \\n / \\\\ \\n     \\n \\\\ / \\n     ',
      '     \\n     \\n     \\n     \\n  \\u2022  ',
    ];
    var i = 0;
    var el = document.getElementById('decision');
    setInterval(function() {
      el.textContent = frames[i];
      i = (i + 1) % frames.length;
    }, 400);
  </script>
</body>
</html>`

export const decisionHTML = `<div class="decision-container">
  <pre class="decision-frame" id="decision"></pre>
</div>`

export const decisionCSS = `.decision-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  background: #000;
}

.decision-frame {
  font-family: 'Courier New', monospace;
  font-size: 1.25rem;
  color: #fff;
  white-space: pre;
  line-height: 1;
  text-align: center;
}`

export const decisionJS = `var frames = [
  '  \\u2022  \\n     \\n     \\n     \\n     ',
  '     \\n / \\\\ \\n     \\n \\\\ / \\n     ',
  '     \\n     \\n\\u2022   \\u2022\\n     \\n     ',
  '     \\n / \\\\ \\n     \\n \\\\ / \\n     ',
  '     \\n     \\n     \\n     \\n  \\u2022  ',
];
var i = 0;
var el = document.getElementById('decision');
setInterval(function() {
  el.textContent = frames[i];
  i = (i + 1) % frames.length;
}, 400);`
