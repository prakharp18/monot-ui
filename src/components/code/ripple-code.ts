export const rippleFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Ripple</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .ripple-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 300px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }
    .ripple-frame {
      font-family: 'Courier New', monospace;
      font-size: 2rem;
      color: #fff;
      white-space: pre;
    }
  </style>
</head>
<body>
  <div class="ripple-container">
    <pre class="ripple-frame" id="ripple">   •   </pre>
  </div>

  <script>
    var frames = [
      '   •   ',
      '  ○○○  ',
      ' ○   ○ ',
      '○     ○',
      '       ',
    ];
    var i = 0;
    var el = document.getElementById('ripple');
    setInterval(function() {
      el.textContent = frames[i];
      i = (i + 1) % frames.length;
    }, 400);
  </script>
</body>
</html>`

export const rippleHTML = `<div class="ripple-container">
  <pre class="ripple-frame" id="ripple">   •   </pre>
</div>`

export const rippleCSS = `.ripple-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  background: #000;
}

.ripple-frame {
  font-family: 'Courier New', monospace;
  font-size: 2rem;
  color: #fff;
  white-space: pre;
}`

export const rippleJS = `var frames = [
  '   •   ',
  '  ○○○  ',
  ' ○   ○ ',
  '○     ○',
  '       ',
];
var i = 0;
var el = document.getElementById('ripple');
setInterval(function() {
  el.textContent = frames[i];
  i = (i + 1) % frames.length;
}, 400);`
