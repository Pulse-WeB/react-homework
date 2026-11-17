import { useState } from "react";
import Answer from "./Answer";
function MathQuiz() {
  const [a, setA] = useState(Math.floor(Math.random() * 10));
  const [b, setB] = useState(Math.floor(Math.random() * 10));
  const [correctAnswersQuantity, setCorrectAnswersQuantity] = useState(0);
  const [incorrectAnswersQuantity, setIncorrectAnswersQuantity] = useState(0);
  const sampleQuestion = `${a} + ${b}`;
  const correctAnswer = a + b;
  function updatePoints(isCorrect) {
    if (isCorrect === true) {
      setCorrectAnswersQuantity(correctAnswersQuantity + 1);
    } else {
      setIncorrectAnswersQuantity(incorrectAnswersQuantity + 1);
    }
    setA(Math.floor(Math.random() * 10));
    setB(Math.floor(Math.random() * 10));
  }

  return (
    <>
      <p>Задача:</p>
      <p>{sampleQuestion}</p>
      <Answer updatePoints={updatePoints} correctAnswer={correctAnswer} />
      <p>Правильных ответов: {correctAnswersQuantity}</p>
      <p>Неправильных ответов: {incorrectAnswersQuantity} </p>
    </>
  );
}

export default MathQuiz;
