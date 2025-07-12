import React from 'react';
import './QuestionCard.css';

const QuestionCard = ({ title, description, tags, username, answers }) => {
  return (
    <div className="question-card">
      <div className="question-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <p className="username">{username}</p>
      </div>
      <div className="answer-count">{answers} ans</div>
    </div>
  );
};

export default QuestionCard;
