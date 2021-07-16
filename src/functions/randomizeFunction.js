

export function RandomiseAnswers(answerArray) {
  var currIndex = answerArray.length, randomIndex, tempValue;

  //while array is not equal to 0
  while (0 !== currIndex) {
      //create random function index
    randomIndex = Math.floor(Math.random() * currIndex);
   
    //pick an element
    currIndex--;

    //create tempvalye for the current index
    tempValue=answerArray[currIndex];
    //the current index == to random index
    answerArray[currIndex]=answerArray[randomIndex]
    //swap random index to be temp value
    answerArray[randomIndex]=tempValue
  }
  return answerArray
}
