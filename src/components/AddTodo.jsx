import React, { useState } from "react";
import { TODOS } from "../data/data";

const AddTodo = ({ setTodos }) => {
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setTodos(prev => [
      ...prev,
      {
        id: TODOS.length + 1,
        body: input.trim(),
        completed: false,
      },
    ]);

    setInput("");
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
