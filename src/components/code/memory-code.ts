export const memoryFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Memory Recall</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .memory-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 300px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }
    .memory-frame {
      font-family: 'Courier New', monospace;
      font-size: 1.5rem;
      color: #fff;
      letter-spacing: 0.1em;
    }
  </style>
</head>
<body>
  <div class="memory-container">
    <span class="memory-frame" id="memory">[   ]</span>
  </div>

  <script>
    var frames = ['[   ]', '[ \\u2022 ]', '[\\u2022\\u2022\\u2022]', '[ \\u2022 ]', '[   ]'];
    var i = 0;
    var el = document.getElementById('memory');
    setInterval(function() {
      el.textContent = frames[i];
      i = (i + 1) % frames.length;
    }, 250);
  </script>
</body>
</html>`

export const memoryHTML = `<div class="memory-container">
  <span class="memory-frame" id="memory">[   ]</span>
</div>`

export const memoryCSS = `.memory-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  background: #000;
}

.memory-frame {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  color: #fff;
  letter-spacing: 0.1em;
}`

export const memoryJS = `var frames = ['[   ]', '[ \\u2022 ]', '[\\u2022\\u2022\\u2022]', '[ \\u2022 ]', '[   ]'];
var i = 0;
var el = document.getElementById('memory');
setInterval(function() {
  el.textContent = frames[i];
  i = (i + 1) % frames.length;
}, 250);`
