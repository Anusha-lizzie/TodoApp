import React from 'react';
import '../../src/App.css';

const TodoList = ({ todos, updateTodo, deleteTodo, toggleComplete }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'red-bg' : 'yellow-bg'}`}
        >
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="mr-2"
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </div>
          <div>
            <button className="btn btn-secondary btn-sm mr-2" onClick={() => updateTodo({
              ...todo,
              text: prompt('Update todo text:', todo.text) || todo.text,
            })}>
              Edit
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
