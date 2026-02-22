export const orbitFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Orbit</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .orbit-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 300px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }
    .orbit-frame {
      font-family: 'Courier New', monospace;
      font-size: 1.25rem;
      color: #fff;
      white-space: pre;
      line-height: 1;
    }
  </style>
</head>
<body>
  <div class="orbit-container">
    <pre class="orbit-frame" id="orbit"></pre>
  </div>

  <script>
    var frames = [
      ['  •  ', '     ', '  ○  ', '     ', '  •  '],
      ['     ', ' •   ', '  ○  ', '   • ', '     '],
      ['     ', '     ', '• ○ •', '     ', '     '],
      ['     ', '   • ', '  ○  ', ' •   ', '     '],
      ['  •  ', '     ', '  ○  ', '     ', '  •  '],
    ];
    var i = 0;
    var el = document.getElementById('orbit');
    setInterval(function() {
      el.textContent = frames[i].join('\\n');
      i = (i + 1) % frames.length;
    }, 150);
  </script>
</body>
</html>`

export const orbitHTML = `<div class="orbit-container">
  <pre class="orbit-frame" id="orbit"></pre>
</div>`

export const orbitCSS = `.orbit-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  background: #000;
}

.orbit-frame {
  font-family: 'Courier New', monospace;
  font-size: 1.25rem;
  color: #fff;
  white-space: pre;
  line-height: 1;
}`

export const orbitJS = `var frames = [
  ['  •  ', '     ', '  ○  ', '     ', '  •  '],
  ['     ', ' •   ', '  ○  ', '   • ', '     '],
  ['     ', '     ', '• ○ •', '     ', '     '],
  ['     ', '   • ', '  ○  ', ' •   ', '     '],
  ['  •  ', '     ', '  ○  ', '     ', '  •  '],
];
var i = 0;
var el = document.getElementById('orbit');
setInterval(function() {
  el.textContent = frames[i].join('\\n');
  i = (i + 1) % frames.length;
}, 150);`
