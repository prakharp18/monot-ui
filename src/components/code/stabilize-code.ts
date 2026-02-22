export const stabilizeFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Stabilizing Wave</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .stabilize-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 300px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }
    .stabilize-frame {
      font-family: 'Courier New', monospace;
      font-size: 1.5rem;
      color: #fff;
      letter-spacing: 0.2em;
    }
  </style>
</head>
<body>
  <div class="stabilize-container">
    <span class="stabilize-frame" id="stabilize">~ ~ ~ ~ ~</span>
  </div>

  <script>
    var frames = [
      '~ ~ ~ ~ ~',
      ' ~ ~ ~ ~ ',
      '  ~ ~ ~  ',
      '   ~ ~   ',
      '    ~    ',
      '   ~ ~   ',
      '  ~ ~ ~  ',
      ' ~ ~ ~ ~ ',
    ];
    var i = 0;
    var el = document.getElementById('stabilize');
    setInterval(function() {
      el.textContent = frames[i];
      i = (i + 1) % frames.length;
    }, 200);
  </script>
</body>
</html>`

export const stabilizeHTML = `<div class="stabilize-container">
  <span class="stabilize-frame" id="stabilize">~ ~ ~ ~ ~</span>
</div>`

export const stabilizeCSS = `.stabilize-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  background: #000;
}

.stabilize-frame {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  color: #fff;
  letter-spacing: 0.2em;
}`

export const stabilizeJS = `var frames = [
  '~ ~ ~ ~ ~',
  ' ~ ~ ~ ~ ',
  '  ~ ~ ~  ',
  '   ~ ~   ',
  '    ~    ',
  '   ~ ~   ',
  '  ~ ~ ~  ',
  ' ~ ~ ~ ~ ',
];
var i = 0;
var el = document.getElementById('stabilize');
setInterval(function() {
  el.textContent = frames[i];
  i = (i + 1) % frames.length;
}, 200);`
