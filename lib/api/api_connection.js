import "../App.css";
export async function LoadData() {
  const url = "https://opentdb.com/api.php?amount=10";
  const response = await fetch(url);

  if (!response.ok) {
    throw Error(response.status);
  } else {
    console.log(response.status);
  }

  const data = await response.json();
  return data.results.map(({
    question,
    incorrect_answers,
    correct_answer
  }) => ({
    question,
    answers: [...incorrect_answers, correct_answer],
    answer: correct_answer
  }));
}