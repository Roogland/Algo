const sentence = "This is a sentence.";
let length = 0;
let wordCount = 0;
let vowelCount = 0;

for (let i = 0; i < sentence.length; i++) {
  length++;
  if (sentence[i] === " ") {
    wordCount++;
  }
  if (sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u") {
    vowelCount++;
  }
}

console.log(`The length of the sentence is ${length}.`);
console.log(`The number of words in the sentence is ${wordCount + 1}.`);
console.log(`The number of vowels in the sentence is ${vowelCount}.`);
