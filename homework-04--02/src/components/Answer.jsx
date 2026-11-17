import { useState } from "react";
function Answer({ correctAnswer, updatePoints }) {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  function isAnswerCorrect(correctAnswer, userAnswer) {
    if (correctAnswer === Number(userAnswer)) {
      updatePoints(true);
      return `Ваш Ответ Верный`;
    } else {
      updatePoints(false);
      return ` Ответ не верный`;
    }
  }
  function formHandler(event) {
    event.preventDefault();
    const userAnswer = answer;
    setResult(isAnswerCorrect(correctAnswer, userAnswer));
    setAnswer("");
  }
  return (
    <form onSubmit={formHandler}>
      <input
        name="answer"
        value={answer}
        type="text"
        placeholder="Введите Ответ"
        onChange={(event) => setAnswer(event.target.value)}
        required
      />
      <button type="submit">Отправить</button>
      <p>{result}</p>
    </form>
  );
}
export default Answer;
