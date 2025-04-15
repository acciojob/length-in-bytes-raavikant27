const byteSize = (str) => {
  return new Blob([str]).size;
};

// Do not change the code below
const str1 = prompt("Enter first string.");
alert("Byte size: " + byteSize(str1));

const str2 = prompt("Enter second string.");
alert("Byte size: " + byteSize(str2));
