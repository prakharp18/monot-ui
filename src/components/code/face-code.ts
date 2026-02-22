export const faceFull = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Personality Engine</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #000;
      color: #fff;
      font-family: 'Courier New', monospace;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      gap: 24px;
    }
    .face-stage {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 280px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
      overflow: hidden;
    }
    .face {
      font-size: 3.5rem;
      color: #fff;
      display: inline-block;
      transition: transform 300ms ease-out;
      user-select: none;
    }
    .tag {
      position: absolute;
      top: 12px;
      right: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #52525b;
    }
    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #22c55e;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
    .modes {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .mode-btn {
      padding: 6px 14px;
      border: 1px solid #3f3f46;
      border-radius: 8px;
      background: transparent;
      color: #a1a1aa;
      cursor: pointer;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      transition: all 150ms;
    }
    .mode-btn:hover { color: #fff; border-color: #71717a; }
    .mode-btn.active { background: #fff; color: #000; border-color: #fff; }
  </style>
</head>
<body>
  <div class="face-stage" id="stage">
    <div class="tag"><span class="dot"></span> Tracking Active</div>
    <span class="face" id="face">(•\u200b\u203f\u200b•)</span>
  </div>
  <div class="modes">
    <button class="mode-btn active" data-mode="default">Default</button>
    <button class="mode-btn" data-mode="wink">Wink</button>
    <button class="mode-btn" data-mode="thinking">Thinking</button>
    <button class="mode-btn" data-mode="sleep">Sleep</button>
    <button class="mode-btn" data-mode="tilt">Tilt</button>
    <button class="mode-btn" data-mode="calm">Calm</button>
  </div>

  <script>
    var el = document.getElementById('face');
    var mode = 'default';
    var frame = 0;
    var interval = null;
    var tiltAngle = 0;
    var breatheScale = 1;
    var mx = 0, my = 0;
    var breatheStart = null;

    var FACES = {
      default:  ['(\u2022\u203f\u2022)', '(\u2212\u203f\u2212)'],
      wink:     ['(\u2022\u203f\u2022)', '(\u2022\u203f\u2010)'],
      thinking: ['(\u2022_\u2022)', '(\u2022\u2010\u2022)'],
      sleep:    ['(\u2010\u203f\u2010)', '(\u2010.\u2010)'],
      tilt:     ['(\u2022\u203f\u2022)'],
      calm:     ['(\u2022\u203f\u2022)'],
    };

    // Mouse tracking
    document.addEventListener('mousemove', function(e) {
      var rect = document.getElementById('stage').getBoundingClientRect();
      mx = (e.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2);
      my = (e.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2);
      applyTransform();
    });

    // Breathing rAF
    function breathe(ts) {
      if (!breatheStart) breatheStart = ts;
      var t = (ts - breatheStart) / 1000;
      var speed = mode === 'sleep' ? 0.8 : 1.2;
      var depth = mode === 'sleep' ? 0.03 : 0.02;
      breatheScale = 1 + Math.sin(t * speed) * depth;
      applyTransform();
      requestAnimationFrame(breathe);
    }
    requestAnimationFrame(breathe);

    function applyTransform() {
      var tx = mx * 20;
      var ty = my * 10;
      var rot = mode === 'tilt' ? tiltAngle : mx * 10;
      el.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + breatheScale + ') rotate(' + rot + 'deg)';
    }

    function startMode(m) {
      mode = m;
      frame = 0;
      tiltAngle = 0;
      breatheStart = null;
      if (interval) clearInterval(interval);

      if (m === 'default') {
        interval = setInterval(function() {
          el.textContent = FACES.default[1];
          setTimeout(function() { el.textContent = FACES.default[0]; }, 150);
        }, 3500);
      } else if (m === 'wink') {
        interval = setInterval(function() {
          el.textContent = FACES.wink[1];
          setTimeout(function() { el.textContent = FACES.wink[0]; }, 150);
        }, 2500);
      } else if (m === 'thinking') {
        interval = setInterval(function() {
          frame = (frame + 1) % 2;
          el.textContent = FACES.thinking[frame];
        }, 1000);
      } else if (m === 'sleep') {
        interval = setInterval(function() {
          frame = (frame + 1) % 2;
          el.textContent = FACES.sleep[frame];
        }, 2000);
      } else if (m === 'tilt') {
        interval = setInterval(function() {
          tiltAngle = tiltAngle === 0 ? 15 : 0;
        }, 2000);
      } else if (m === 'calm') {
        el.style.animation = 'none';
      }

      el.textContent = FACES[m][0];
    }

    document.querySelectorAll('.mode-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.mode-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        startMode(btn.dataset.mode);
      });
    });

    startMode('default');
  </script>
</body>
</html>`

export const faceHTML = `<div class="face-stage" id="stage">
  <div class="tag"><span class="dot"></span> Tracking Active</div>
  <span class="face" id="face">(•‿•)</span>
</div>
<div class="modes">
  <button class="mode-btn active" data-mode="default">Default</button>
  <button class="mode-btn" data-mode="wink">Wink</button>
  <button class="mode-btn" data-mode="thinking">Thinking</button>
  <button class="mode-btn" data-mode="sleep">Sleep</button>
  <button class="mode-btn" data-mode="tilt">Tilt</button>
  <button class="mode-btn" data-mode="calm">Calm</button>
</div>`

export const faceCSS = `.face-stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 280px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  background: #000;
  overflow: hidden;
}

.face {
  font-family: 'Courier New', monospace;
  font-size: 3.5rem;
  color: #fff;
  display: inline-block;
  transition: transform 300ms ease-out;
  user-select: none;
}

.tag {
  position: absolute;
  top: 12px;
  right: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Courier New', monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #52525b;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.modes {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
}

.mode-btn {
  padding: 6px 14px;
  border: 1px solid #3f3f46;
  border-radius: 8px;
  background: transparent;
  color: #a1a1aa;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 150ms;
}
.mode-btn:hover { color: #fff; border-color: #71717a; }
.mode-btn.active { background: #fff; color: #000; border-color: #fff; }`

export const faceJS = `var el = document.getElementById('face');
var mode = 'default';
var frame = 0;
var interval = null;
var tiltAngle = 0;
var breatheScale = 1;
var mx = 0, my = 0;
var breatheStart = null;

var FACES = {
  default:  ['(•‿•)', '(−‿−)'],
  wink:     ['(•‿•)', '(•‿-)'],
  thinking: ['(•_•)', '(•-•)'],
  sleep:    ['(-‿-)', '(-.-)'],
  tilt:     ['(•‿•)'],
  calm:     ['(•‿•)'],
};

document.addEventListener('mousemove', function(e) {
  var rect = document.getElementById('stage').getBoundingClientRect();
  mx = (e.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2);
  my = (e.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2);
  applyTransform();
});

function breathe(ts) {
  if (!breatheStart) breatheStart = ts;
  var t = (ts - breatheStart) / 1000;
  var speed = mode === 'sleep' ? 0.8 : 1.2;
  var depth = mode === 'sleep' ? 0.03 : 0.02;
  breatheScale = 1 + Math.sin(t * speed) * depth;
  applyTransform();
  requestAnimationFrame(breathe);
}
requestAnimationFrame(breathe);

function applyTransform() {
  var tx = mx * 20;
  var ty = my * 10;
  var rot = mode === 'tilt' ? tiltAngle : mx * 10;
  el.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + breatheScale + ') rotate(' + rot + 'deg)';
}

function startMode(m) {
  mode = m; frame = 0; tiltAngle = 0; breatheStart = null;
  if (interval) clearInterval(interval);
  if (m === 'default') {
    interval = setInterval(function() {
      el.textContent = FACES.default[1];
      setTimeout(function() { el.textContent = FACES.default[0]; }, 150);
    }, 3500);
  } else if (m === 'wink') {
    interval = setInterval(function() {
      el.textContent = FACES.wink[1];
      setTimeout(function() { el.textContent = FACES.wink[0]; }, 150);
    }, 2500);
  } else if (m === 'thinking') {
    interval = setInterval(function() {
      frame = (frame + 1) % 2; el.textContent = FACES.thinking[frame];
    }, 1000);
  } else if (m === 'sleep') {
    interval = setInterval(function() {
      frame = (frame + 1) % 2; el.textContent = FACES.sleep[frame];
    }, 2000);
  } else if (m === 'tilt') {
    interval = setInterval(function() { tiltAngle = tiltAngle === 0 ? 15 : 0; }, 2000);
  }
  el.textContent = FACES[m][0];
}

document.querySelectorAll('.mode-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.mode-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    startMode(btn.dataset.mode);
  });
});

startMode('default');`
