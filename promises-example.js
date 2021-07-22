let p = new Promise((resolve, reject) => {
  let number = 15 / 4;

  number === 5 ? resolve("Completed") : reject(new Error("failed"));
});

p.then((message) => {
  console.log(`This is in the "then" method: ${message}`);
}).catch((error) => {
  console.error(error);
});
