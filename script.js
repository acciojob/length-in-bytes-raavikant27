
const byteSize = (str) => {
  // Create a new Blob with the given string and get its size in bytes
  return new Blob([str]).size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
