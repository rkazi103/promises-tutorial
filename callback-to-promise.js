// Callback
function studyingCallback(callback, errorCallback) {
  let userTakesBreak = false;
  let userPlayingGame = false;

  if (userTakesBreak) {
    errorCallback({
      name: "The User went to go take a break",
      message: "Bruh -_-",
    });
  } else if (userPlayingGame) {
    errorCallback({
      name: "The user is playing video games?! 🎮",
      message: "Go back to studying! 😡",
    });
  } else {
    callback("User is studying 📙😊");
  }
}

// Calling Callback
studyingCallback(
  (message) => console.log(message),
  (error) => console.error(`${error.name} ${error.message}`)
);

// Promise
function studyingPromise() {
  let userTakesBreak = true;
  let userPlayingGame = false;

  return new Promise((resolve, reject) => {
    if (userTakesBreak) {
      reject(new Error("The User went to go take a break. Bruh -_-"));
    } else if (userPlayingGame) {
      reject(
        new Error(
          "The user is playing video games 🎮?! Go back to studying! 😡"
        )
      );
    } else {
      resolve("User is studying 📙😊");
    }
  });
}

studyingPromise()
  .then((message) => console.log(`Success ${message}`))
  .catch((error) => console.error(error));
