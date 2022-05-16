import React, { useState } from "react";
export default function App() {
  //todo app with tailwind css
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log(todo); 
  return (
    <div className="bg-black text-white min-h-screen flex text-2xl font-mono flex-col justify-center items-center w-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="todo..."
          className="bg-gray-800 rounded-l w-64 px-4 py-1 text-white focus:outline-none focus:shadow-outline"
          value={todo}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          data-testid="submit-button"
          className="bg-blue-500 rounded-r px-4 py-1 text-white hover:bg-blue-700"
        >
          Add
        </button>
      </form>
      
      <ul data-testid="data-list">
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
