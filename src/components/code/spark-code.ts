export const sparkFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Spark</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .spark-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 300px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }
    .spark-frame {
      font-family: 'Courier New', monospace;
      font-size: 3rem;
      color: #fff;
      transition: all 75ms;
    }
  </style>
</head>
<body>
  <div class="spark-container">
    <span class="spark-frame" id="spark">✦</span>
  </div>

  <script>
    var frames = ['.', '*', '✦', '*', '.', ' ', ' '];
    var i = 0;
    var el = document.getElementById('spark');
    setInterval(function() {
      el.textContent = frames[i] || '\\u00A0';
      i = (i + 1) % frames.length;
    }, 150);
  </script>
</body>
</html>`

export const sparkHTML = `<div class="spark-container">
  <span class="spark-frame" id="spark">✦</span>
</div>`

export const sparkCSS = `.spark-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  background: #000;
}

.spark-frame {
  font-family: 'Courier New', monospace;
  font-size: 3rem;
  color: #fff;
  transition: all 75ms;
}`

export const sparkJS = `var frames = ['.', '*', '✦', '*', '.', ' ', ' '];
var i = 0;
var el = document.getElementById('spark');
setInterval(function() {
  el.textContent = frames[i] || '\\u00A0';
  i = (i + 1) % frames.length;
}, 150);`
