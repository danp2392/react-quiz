export async function LoadData() {
  const url = process.env.REACT_APP_OPEN_API;

  const response = await fetch(url);

  if (!response.ok) {
    throw Error(response.status);
  } else {
    console.log(response.status);
  }

  const data = await response.json();

  return data.results.map(
    ({ question, incorrect_answers, correct_answer }) => ({
      question,
      answers: [...incorrect_answers, correct_answer],
      answer: correct_answer,
    })
  );
}
