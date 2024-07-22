import React, { useState } from 'react';
import '../../src/App.css';

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo({
        id: Date.now(),
        text: inputValue,
        completed: false,
      });
      setInputValue('');
    }
  };

  return (
    <div className="card mb-4 light-blue-bg">
      <div className="card-body">
        <h5 className="card-title">Add a new todo</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a todo"
            />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
