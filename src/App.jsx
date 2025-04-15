import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo';
import Button from './components/Button';
import Todos from './components/Todos';
import { TODOS } from './data/data';

function App() {

  const [todos, setTodos] = useState(TODOS);

  return (
   <div>
      <AddTodo setTodos={setTodos}></AddTodo>

      <h2>My todos</h2>
      <Todos todos={todos} setTodos={setTodos} />
      <Button />
      <Button greeting="jambo" />
      <Button greeting="konichiwa" />

   </div>
  )
}

export default App;
