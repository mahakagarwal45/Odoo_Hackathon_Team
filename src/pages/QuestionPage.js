import React, { useState } from 'react';
import './QuestionPage.css';

const dummyQuestion = {
  title: 'How to join 2 columns in a data set to make a separate column in SQL?',
  description: 'I am a beginner. For example, column 1 contains First name and column 2 contains Last name. I want a column to combine them.',
  tags: ['SQL', 'Beginner'],
  author: 'User Name',
  answers: [
    { id: 1, text: 'Use CONCAT(column1, column2) in SQL.', author: 'Answerer1', votes: 2 },
    { id: 2, text: 'You can also use CONCAT_WS() for cleaner formatting.', author: 'Answerer2', votes: 1 },
  ]
};

const QuestionPage = () => {
  const [answers, setAnswers] = useState(dummyQuestion.answers);
  const [newAnswer, setNewAnswer] = useState('');
  const [isLoggedIn] = useState(true); // ✅ removed unused setter

  const handleUpvote = (id) => {
    if (!isLoggedIn) return alert('Login to vote.');
    setAnswers(answers.map(ans =>
      ans.id === id ? { ...ans, votes: ans.votes + 1 } : ans
    ));
  };

  const handleSubmit = () => {
    if (!isLoggedIn) return alert('Login to answer.');
    if (newAnswer.trim() === '') return;

    const newAns = {
      id: answers.length + 1,
      text: newAnswer,
      author: 'You',
      votes: 0,
    };

    setAnswers([...answers, newAns]);
    setNewAnswer('');
  };

  return (
    <div className="question-page">
      <div className="breadcrumb">Home &gt; Question</div>

      <div className="question-box">
        <h2>{dummyQuestion.title}</h2>
        <p>{dummyQuestion.description}</p>

        <div className="tags">
          {dummyQuestion.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="author">Posted by {dummyQuestion.author}</div>
      </div>

      <div className="answers-section">
        <h3>{answers.length} Answers</h3>

        {answers.map((ans) => (
          <div key={ans.id} className="answer-card">
            <p>{ans.text}</p>
            <div className="answer-footer">
              <span>By {ans.author}</span>
              <button onClick={() => handleUpvote(ans.id)}>⬆️ {ans.votes}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="submit-section">
        <h3>Submit Your Answer</h3>
        <textarea
          placeholder="Write your answer here..."
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default QuestionPage;
