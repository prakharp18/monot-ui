export const faceFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Face</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .face-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 400px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }

    .face-char {
      font-family: 'Courier New', monospace;
      font-size: 4rem;
      color: #fff;
      display: inline-block;
      transition: transform 0.3s ease-out;
      user-select: none;
    }
  </style>
</head>
<body>
  <div class="face-container" id="ascii-face">
    <span class="face-char" id="face-text">(•‿•)</span>
  </div>

  <script>
    var face = document.getElementById('face-text');
    var container = document.getElementById('ascii-face');
    var open = '(•‿•)';
    var closed = '(−‿−)';
    var breatheStart = null;

    // Blink every 3.5 seconds
    setInterval(function() {
      face.textContent = closed;
      setTimeout(function() { face.textContent = open; }, 150);
    }, 3500);

    // Breathing animation
    function breathe(ts) {
      if (!breatheStart) breatheStart = ts;
      var t = (ts - breatheStart) / 1000;
      var s = 1 + Math.sin(t * 1.2) * 0.02;
      face.style.transform = 'scale(' + s + ')';
      requestAnimationFrame(breathe);
    }
    requestAnimationFrame(breathe);

    // Mouse tracking
    container.addEventListener('mousemove', function(e) {
      var rect = container.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var dx = ((e.clientX - cx) / (rect.width / 2)) * 20;
      var dy = ((e.clientY - cy) / (rect.height / 2)) * 10;
      var r = ((e.clientX - cx) / (rect.width / 2)) * 8;
      face.style.transform = 'translate(' + dx + 'px,' + dy + 'px) rotate(' + r + 'deg)';
    });

    container.addEventListener('mouseleave', function() {
      breatheStart = null;
      requestAnimationFrame(breathe);
    });
  </script>
</body>
</html>`

export const faceHTML = `<div class="face-container" id="ascii-face">
  <span class="face-char" id="face-text">(•‿•)</span>
</div>`

export const faceCSS = `.face-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background: #000;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
}

.face-char {
  font-family: 'Courier New', monospace;
  font-size: 4rem;
  color: #fff;
  display: inline-block;
  transition: transform 0.3s ease-out;
  user-select: none;
}`

export const faceJS = `var face = document.getElementById('face-text');
var container = document.getElementById('ascii-face');
var open = '(•‿•)';
var closed = '(−‿−)';
var breatheStart = null;

// Blink every 3.5 seconds
setInterval(function() {
  face.textContent = closed;
  setTimeout(function() { face.textContent = open; }, 150);
}, 3500);

// Breathing animation
function breathe(ts) {
  if (!breatheStart) breatheStart = ts;
  var t = (ts - breatheStart) / 1000;
  var s = 1 + Math.sin(t * 1.2) * 0.02;
  face.style.transform = 'scale(' + s + ')';
  requestAnimationFrame(breathe);
}
requestAnimationFrame(breathe);

// Mouse tracking — face follows your cursor
container.addEventListener('mousemove', function(e) {
  var rect = container.getBoundingClientRect();
  var cx = rect.left + rect.width / 2;
  var cy = rect.top + rect.height / 2;
  var dx = ((e.clientX - cx) / (rect.width / 2)) * 20;
  var dy = ((e.clientY - cy) / (rect.height / 2)) * 10;
  var r = ((e.clientX - cx) / (rect.width / 2)) * 8;
  face.style.transform = 'translate(' + dx + 'px,' + dy + 'px) rotate(' + r + 'deg)';
});

// Reset to breathing when mouse leaves
container.addEventListener('mouseleave', function() {
  breatheStart = null;
  requestAnimationFrame(breathe);
});`
