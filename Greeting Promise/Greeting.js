function greetWithName(name) {
  return new Promise((resolve, reject) => {
    if (typeof name === "string") {
      resolve(`Hello, ${name}!`);
    } else {
      reject("Invalid name provided.");
    }
  });
}

const name = "Mithun";

greetWithName(name)
  .then((greeting) => {
    console.log(greeting);
  })
  .catch((error) => {
    console.error(error);
  });
