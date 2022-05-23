import React, { useState } from "react";

export default function App() {
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
<<<<<<< HEAD
  console.log(todos);
=======
  console.log(todo);
>>>>>>> 6cf3356e41e85ff3f850fe51b075f3a97ee7dc51
  return (
    <div className="bg-black text-white min-h-screen flex text-2xl font-mono flex-col justify-center items-center w-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="todo..."
          className="bg-gray-800 rounded-l w-64 px-4 py-1 text-white focus:outline-none focus:shadow-outline"
          value={todo}
          onChange={handleChange}
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
<<<<<<< HEAD
        {todos!.map((n, index) => {
          return <div key={index}>{n}</div>;
=======
        {todos.map((todos, index) => {
          if (todo.length === 0) {
            return <h1 className="text-red-500">required</h1>;
          }
          return <li key={index}>{todos}</li>;
>>>>>>> 6cf3356e41e85ff3f850fe51b075f3a97ee7dc51
        })}
      </ul>
    </div>
  );
}
