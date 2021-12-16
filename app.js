let wordBank = {
  wordOne: [
    "kicked",
    "punched",
    "head butted",
    "stamped",
    "pushed",
    "kidney punched",
    "upper cut",
  ],
  Word2: [
    "Hulk Hulgan",
    "a badger",
    "a t-rex",
    "Santa",
    "his grandma",
    "Mr.T",
    "Donald Trump",
    "Dave",
  ],
  word3: [
    "in the face.",
    "into a volcano.",
    "into the sun.",
    "in the nuts",
    "into submission.",
    "until it self combusted",
  ],
};
//Generates a random number.
let randomNum = (num) => Math.floor(Math.random() * num);

//Returns an array of words as a sentence from the wordBank Obj.
let sentenceMachine = () => {
  let sentence = ["Chuck Norris"];
  for (let word in wordBank) {
    sentence.push(wordBank[word][randomNum(wordBank[word].length)]);
  }
  return sentence.join(" ");
};
