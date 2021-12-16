let wordBank = {
  verb: ["kicked", "punched", "head butted", "stamped"],
  noun: ["Hulk Hulgan", "a badger", "a t-rex", "Santa"],
  place: [
    "in the face.",
    "into a volcano.",
    "into the sun.",
    "in the nuts",
    "into submission.",
  ],
};
//Generates a random number.
let randomNum = (num) => Math.floor(Math.random() * num);

let wordMachine = () => {
  let wordHolder = [];
  for (let word in wordBank) {
    wordHolder.push(wordBank[word][randomNum(wordBank[word].length)]);
  }
  return wordHolder;
};

let sentenceMachine = (arr) => {
  let wordOne = arr[0];
  let wordTwo = arr[1];
  let wordThree = arr[2];
  return `Chuck Norris ${wordOne} ${wordTwo} ${wordThree}.`;
};

let words = wordMachine();
console.log(sentenceMachine(words));
