const { default: VanillaTilt } = require('vanilla-tilt');

export const tilt = function () {
  VanillaTilt.init(document.querySelectorAll('.box'), {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.7,
  });
};
