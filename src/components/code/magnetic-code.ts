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
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 400px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }

    .dot {
      position: absolute;
      left: 50%;
      top: 50%;
      font-family: 'Courier New', monospace;
      font-size: 1.5rem;
      color: #fff;
      pointer-events: none;
      user-select: none;
    }
  </style>
</head>
<body>
  <div class="magnetic-container" id="magnetic">
    <span class="dot" data-bx="-80" data-by="-40">•</span>
    <span class="dot" data-bx="80"  data-by="-40">•</span>
    <span class="dot" data-bx="-60" data-by="0">◦</span>
    <span class="dot" data-bx="60"  data-by="0">◦</span>
    <span class="dot" data-bx="-80" data-by="40">•</span>
    <span class="dot" data-bx="80"  data-by="40">•</span>
    <span class="dot" data-bx="0"   data-by="-60">◦</span>
    <span class="dot" data-bx="0"   data-by="60">◦</span>
  </div>

  <script>
    var container = document.getElementById('magnetic');
    var dots = document.querySelectorAll('.dot');
    var PULL_RADIUS = 200;
    var PULL_STRENGTH = 0.6;
    var mouse = null;

    // Store state per dot
    var state = [];
    dots.forEach(function(el) {
      var bx = parseFloat(el.dataset.bx);
      var by = parseFloat(el.dataset.by);
      state.push({ el: el, baseX: bx, baseY: by, x: bx, y: by });
    });

    window.addEventListener('mousemove', function(e) {
      var rect = container.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      mouse = { x: e.clientX - cx, y: e.clientY - cy };
    });

    window.addEventListener('mouseleave', function() {
      mouse = null;
    });

    function animate() {
      for (var i = 0; i < state.length; i++) {
        var d = state[i];
        var tx = d.baseX;
        var ty = d.baseY;

        if (mouse) {
          var dx = mouse.x - d.baseX;
          var dy = mouse.y - d.baseY;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < PULL_RADIUS) {
            var force = (1 - dist / PULL_RADIUS) * PULL_STRENGTH;
            tx = d.baseX + dx * force;
            ty = d.baseY + dy * force;
          }
        }

        d.x += (tx - d.x) * 0.12;
        d.y += (ty - d.y) * 0.12;

        d.el.style.transform =
          'translate(calc(-50% + ' + d.x + 'px), calc(-50% + ' + d.y + 'px))';
      }
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  </script>
</body>
</html>`

export const magneticHTML = `<div class="magnetic-container" id="magnetic">
  <span class="dot" data-bx="-80" data-by="-40">•</span>
  <span class="dot" data-bx="80"  data-by="-40">•</span>
  <span class="dot" data-bx="-60" data-by="0">◦</span>
  <span class="dot" data-bx="60"  data-by="0">◦</span>
  <span class="dot" data-bx="-80" data-by="40">•</span>
  <span class="dot" data-bx="80"  data-by="40">•</span>
  <span class="dot" data-bx="0"   data-by="-60">◦</span>
  <span class="dot" data-bx="0"   data-by="60">◦</span>
</div>`

export const magneticCSS = `.magnetic-container {
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

.dot {
  position: absolute;
  left: 50%;
  top: 50%;
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  color: #fff;
  pointer-events: none;
  user-select: none;
}`

export const magneticJS = `var container = document.getElementById('magnetic');
var dots = document.querySelectorAll('.dot');
var PULL_RADIUS = 200;
var PULL_STRENGTH = 0.6;
var mouse = null;

// Store state per dot
var state = [];
dots.forEach(function(el) {
  var bx = parseFloat(el.dataset.bx);
  var by = parseFloat(el.dataset.by);
  state.push({ el: el, baseX: bx, baseY: by, x: bx, y: by });
});

window.addEventListener('mousemove', function(e) {
  var rect = container.getBoundingClientRect();
  var cx = rect.left + rect.width / 2;
  var cy = rect.top + rect.height / 2;
  mouse = { x: e.clientX - cx, y: e.clientY - cy };
});

window.addEventListener('mouseleave', function() {
  mouse = null;
});

function animate() {
  for (var i = 0; i < state.length; i++) {
    var d = state[i];
    var tx = d.baseX;
    var ty = d.baseY;

    if (mouse) {
      var dx = mouse.x - d.baseX;
      var dy = mouse.y - d.baseY;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < PULL_RADIUS) {
        var force = (1 - dist / PULL_RADIUS) * PULL_STRENGTH;
        tx = d.baseX + dx * force;
        ty = d.baseY + dy * force;
      }
    }

    d.x += (tx - d.x) * 0.12;
    d.y += (ty - d.y) * 0.12;

    d.el.style.transform =
      'translate(calc(-50% + ' + d.x + 'px), calc(-50% + ' + d.y + 'px))';
  }
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);`
