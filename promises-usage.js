const playCallOfDuty = new Promise((resolve, reject) => {
  resolve("I played Call of Duty");
});

const playTetris = new Promise((resolve, reject) => {
  resolve("I played Tetris");
});

const playFlappyBird = new Promise((resolve, reject) => {
  resolve("I played Flappy Bird");
});

Promise.all([playCallOfDuty, playTetris, playFlappyBird])
  .then((messages) => messages.forEach((message) => console.log(message)))
  .catch((error) => console.error(error));

Promise.race([playCallOfDuty, playTetris, playFlappyBird])
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
