import React, { memo } from "react";

import TodoCard from "./TodoCard";

export default memo(function ListToDo({
  todoList,
  onTodoChange,
  onTodoDelete,
}) {
  return (
    <div id="todo-section">
      {todoList.length && <h4>To Do List</h4>}

      <div id="todo-list-container">
        {todoList &&
          todoList.map((todo, index) => {
            return (
              <TodoCard
                onTodoDelete={onTodoDelete}
                onTodoChange={onTodoChange}
                key={todo.id}
                todo={todo}
              />
            );
          })}
      </div>
    </div>
  );
});
