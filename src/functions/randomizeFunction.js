export function RandomiseAnswers(answerArray) {
  var currIndex = answerArray.length,
    randomIndex,
    tempValue;

  while (0 !== currIndex) {
    randomIndex = Math.floor(Math.random() * currIndex);

    currIndex--;

    tempValue = answerArray[currIndex];

    answerArray[currIndex] = answerArray[randomIndex];

    answerArray[randomIndex] = tempValue;
  }
  return answerArray;
}
