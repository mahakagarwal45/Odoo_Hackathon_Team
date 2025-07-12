import React, { useState } from 'react';
import './AskQuestion.css';

function AskQuestion() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with a POST call later
    console.log({ title, description, tags });
    alert("Question Submitted!");
  };

  return (
    <div className="ask-container">
      <header className="ask-header">
        <h1>StackIt</h1>
        <nav>
          <a href="/">Home</a>
          <img src="https://via.placeholder.com/30" alt="Profile" />
        </nav>
      </header>

      <form className="ask-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Title of your question"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          placeholder="Describe your issue..."
          rows="6"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label>Tags</label>
        <input
          type="text"
          placeholder="e.g., SQL, joins, data"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AskQuestion;