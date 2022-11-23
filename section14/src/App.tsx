import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [
    {
      id: "t1",
      text: "typescriptコースの完了",
    },
  ];
  return (
    <div className="App">
      <TodoList items={todos}></TodoList>
    </div>
  );
};

export default App;
