
import React, { useState, useEffect } from "react";
import { QUESTIONS } from "./questions";

function shuffle(array) {
  return array
    .map((item) => ({ ...item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ sort, ...item }) => item);
}

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [username, setUsername] = useState("");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setQuestions(shuffle(QUESTIONS).slice(0, 20));

  }, []);

  useEffect(() => {
    setSelected(null);
    setShowExplanation(false);
  }, [index]);

  if (!started) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Question About Security</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded px-4 py-2 mb-4 w-64 text-center"
        />
        <button
          onClick={() => username && setStarted(true)}
          disabled={!username}
          className="px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Get Started
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="p-6 max-w-3xl mx-auto text-center">Loading questions...</div>;
  }

  const q = questions[index];
  const total = questions.length;

  function submitAnswer() {
    if (!selected) return;
    const correct = selected === q.answer;
    if (correct) setScore((s) => s + 1);
    const newAnswers = [...answers, { qid: q.id, selected, correct }];
    setAnswers(newAnswers);
    setShowExplanation(true);
  }

  function nextQuestion() {
    if (index < total - 1) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  }

  function prevQuestion() {
    if (index > 0) setIndex(index - 1);
  }

  function restart() {
    setQuestions(shuffle(QUESTIONS));
    setIndex(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
    setFinished(false);
    setStarted(false);
    setUsername(""); 
  }

  if (finished) {
    const percentage = Math.round((score / total) * 100);
    const passed = percentage >= 80;

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">
          {passed ? `🎉 Congratulations ${username}! You passed!` : `😅 Sorry ${username}, you scored ${percentage}%. Try again!`}
        </h1>
        <p className="text-lg mb-4">Final Score: {score} out of {total} ({percentage}%)</p>
        <button onClick={restart} className="px-6 py-2 bg-blue-600 text-white rounded">Restart</button>
      </div>
    );
  }

  const answeredCount = answers.length;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold">Comptia Security Quiz</h1>
        <div className="text-right">
          <div className="text-sm text-gray-600">Question {index + 1} / {total}</div>
          <div className="text-lg font-semibold">Score: {score} / {answeredCount}</div>
        </div>
      </header>

      <main className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mt-2">{q.question}</h2>
        </div>

        <div className="grid gap-3">
          {q.choices.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelected(c.id)}
              className={`text-left p-3 rounded border ${selected === c.id ? 'border-blue-500 ring-1 ring-blue-300' : 'border-gray-200'} focus:outline-none`}
            >
              <div className="font-medium">{c.id}. {c.text}</div>
            </button>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={submitAnswer}
            disabled={!selected || showExplanation}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >Submit</button>

          <button onClick={prevQuestion} disabled={index===0} className="px-4 py-2 border rounded">Previous</button>
          <button onClick={nextQuestion} disabled={!showExplanation} className="px-4 py-2 border rounded">Next</button>

          <button onClick={restart} className="ml-auto px-3 py-2 text-sm border rounded">Restart</button>
        </div>

        {showExplanation && (
          <div className={`mt-6 p-4 rounded ${answers[answers.length-1]?.correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="font-semibold">Your answer: {answers[answers.length-1]?.selected} — {answers[answers.length-1]?.correct ? 'Correct' : 'Incorrect'}</div>
            <div className="mt-2 text-gray-800">Correct answer: {q.answer}</div>
            <div className="mt-2 text-gray-700">Explanation: {q.explanation}</div>
          </div>
        )}
      </main>

      <footer className="mt-6 text-sm text-gray-500 text-center">Questions are imported from an external file and randomized each session.</footer>
    </div>
  );
}
