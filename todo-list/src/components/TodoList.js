import React, { useState } from "react";

import CreateTodo from "./CreateTodo";
import ListToDo from "./ListTodo";

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <CreateTodo
        onTodoCreated={(todo) => {
          setTodoList((list) => {
            let newList = [...list];
            newList.push({
              id: new Date().getTime(),
              todo,
            });
            return newList;
          });
        }}
      />
      {todoList.length > 0 && (
        <ListToDo
          onTodoChange={(idToUpdate, newVal) => {
            console.log(`oldval is ${idToUpdate} and newval is ${newVal}`);
            setTodoList((list) =>
              list.map(({ id, todo }) =>
                id == idToUpdate ? { id, todo: newVal } : { id, todo },
              ),
            );
          }}
          todoList={todoList}
          onTodoDelete={(idToDelete) => {
            setTodoList((oldList) =>
              oldList.filter(({ id }) => id != idToDelete),
            );
          }}
        />
      )}
    </div>
  );
}
