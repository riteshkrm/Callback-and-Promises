function manipulateString(str) {
  const manipulatedString = str.toUpperCase();

  function logString() {
    console.log(`The manipulated string is: ${manipulatedString}`);
  }

  return logString;
}

const callback = manipulateString("Hello, World!");

// Calling the callback function
callback();
