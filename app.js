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

//Generates random words and returns an array.
let wordMachine = () => {
  let wordHolder = [];
  for (let word in wordBank) {
    wordHolder.push(wordBank[word][randomNum(wordBank[word].length)]);
  }
  return wordHolder;
};

let sentenceMachine = (arr) => {
  let sentence = ["Chuck Norris"];
  arr.forEach((element) => {
    sentence.push(element);
    //console.log(sentence);
  });
  return sentence.join(" ");
};
