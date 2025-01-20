import "./App.css";
import CheckBoxRow from "./CheckBoxRow.jsx";
import { useState } from "react";


const todo = ["read book", "code"];

function App() {
  const [todolist, setTodoList] = useState(todo);
  
  function handleToggleDeleteButton(value) {
    console.log("val", value);
    setTodoList((prevTodoList) => {
      const updatedTodoList = [...prevTodoList];
      return updatedTodoList.filter((x) => x != prevTodoList[value]);
    });
  }
  
  return (
    <div className="App">
      <CheckBoxRow
        items={todolist}
        onSelect={handleToggleDeleteButton}
      ></CheckBoxRow>
    </div>
  );
}

export default App;
