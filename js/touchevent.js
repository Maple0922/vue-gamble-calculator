document.addEventListener('touchstart', event => {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, true);

let lastTouch = 0;
document.addEventListener('touchend', event => {
  const now = window.performance.now();
  if (now - lastTouch <= 500) {
    event.preventDefault();
  }
  lastTouch = now;
}, true);

element.addEventListener('touchend', event => {
  event.preventDefault();
}, false);
