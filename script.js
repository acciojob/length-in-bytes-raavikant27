// Function to calculate byte size of a string
const byteSize = (str) => {
  // Create a Blob object and return its size in bytes
  return new Blob([str]).size;
};

// Example usage:
console.log(byteSize('hello world'));  // Output: 11
console.log(byteSize('안녕하세요'));     // Output: 15
console.log(byteSize(''));             // Output: 0
