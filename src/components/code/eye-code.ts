export const eyeFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Eye</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .eye-container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 400px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }

    .eye-frame {
      font-family: 'Courier New', monospace;
      font-size: 3.5rem;
      color: #52525b;
      line-height: 1;
      letter-spacing: 0.1em;
      white-space: pre;
    }

    .eye-pupil {
      position: absolute;
      font-family: 'Courier New', monospace;
      font-size: 3.5rem;
      color: #fff;
      transition: transform 100ms ease-out;
      pointer-events: none;
    }
  </style>
</head>
<body>
  <div class="eye-container" id="ascii-eye">
    <pre class="eye-frame">╭───────╮
│       │
│       │
╰───────╯</pre>
    <span class="eye-pupil" id="pupil">(•)</span>
  </div>

  <script>
    var container = document.getElementById('ascii-eye');
    var pupil = document.getElementById('pupil');

    document.addEventListener('mousemove', function(e) {
      var rect = container.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;

      // How far the mouse is from center, normalized -1 to 1
      var dx = (e.clientX - cx) / (window.innerWidth / 2);
      var dy = (e.clientY - cy) / (window.innerHeight / 2);

      // Clamp so pupil stays inside the frame
      dx = Math.max(-1, Math.min(1, dx));
      dy = Math.max(-1, Math.min(1, dy));

      // Move pupil (max 20px horizontal, 10px vertical)
      pupil.style.transform = 'translate(' + (dx * 20) + 'px,' + (dy * 10) + 'px)';
    });
  </script>
</body>
</html>`

export const eyeHTML = `<div class="eye-container" id="ascii-eye">
  <pre class="eye-frame">╭───────╮
│       │
│       │
╰───────╯</pre>
  <span class="eye-pupil" id="pupil">(•)</span>
</div>`

export const eyeCSS = `.eye-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background: #000;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
}

.eye-frame {
  font-family: 'Courier New', monospace;
  font-size: 3.5rem;
  color: #52525b;
  line-height: 1;
  letter-spacing: 0.1em;
  white-space: pre;
}

.eye-pupil {
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 3.5rem;
  color: #fff;
  transition: transform 100ms ease-out;
  pointer-events: none;
}`

export const eyeJS = `var container = document.getElementById('ascii-eye');
var pupil = document.getElementById('pupil');

document.addEventListener('mousemove', function(e) {
  var rect = container.getBoundingClientRect();
  var cx = rect.left + rect.width / 2;
  var cy = rect.top + rect.height / 2;

  // How far the mouse is from center, normalized -1 to 1
  var dx = (e.clientX - cx) / (window.innerWidth / 2);
  var dy = (e.clientY - cy) / (window.innerHeight / 2);

  // Clamp so pupil stays inside the frame
  dx = Math.max(-1, Math.min(1, dx));
  dy = Math.max(-1, Math.min(1, dy));

  // Move pupil (max 20px horizontal, 10px vertical)
  pupil.style.transform = 'translate(' + (dx * 20) + 'px,' + (dy * 10) + 'px)';
});`
