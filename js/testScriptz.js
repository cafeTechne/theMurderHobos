let img = new Image();
img.src = '/home/lobo/Documents/themurderhobos/images/timefantasy_characters/sheets/animals1.png';
img.onload = function() {
  init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function init() {
  // future animation code goes here
  const scale = 2;
  ctx.drawImage(img, 0, 0, 32, 32, 0, 0, 16*scale, 18*scale);
}

//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

