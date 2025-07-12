// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import FilterBar from '../components/shared/FilterBar';
import QuestionCard from '../components/shared/QuestionCard';
import Pagination from '../components/shared/Pagination';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="main-container">

        {/* 🔵 Ask Question Button (Moved Above FilterBar) */}
        <div className="ask-question-wrapper">
          <Link to="/ask" className="ask-question-purple">
            ✍️ Ask a New Question
          </Link>
        </div>

        <FilterBar />

        <div className="question-list">
          <QuestionCard
            title="How to join 2 columns in a data set to make a separate column in SQL?"
            description="I do not know the code for it as I am a beginner. For example, column 1 contains First name and column 2 contains Last name. I want a column to combine..."
            tags={['SQL', 'Beginner']}
            username="User Name"
            answers={5}
          />
          <QuestionCard
            title="What is the difference between var, let, and const?"
            description="I am confused about how var, let, and const behave in JavaScript and where to use each."
            tags={['JavaScript', 'ES6']}
            username="User123"
            answers={3}
          />
        </div>

        <div className="go-to-question-wrapper">
          <Link to="/question" className="go-to-question-button">
            🔍 View Full Question Page
          </Link>
        </div>

        <Pagination totalPages={7} />
      </div>
    </div>
  );
};

export default Home;
