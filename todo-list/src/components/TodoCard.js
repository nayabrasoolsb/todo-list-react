import React, { useState } from "react";

export default function TodoCard({
  todo: { id, todo },
  onTodoChange,
  onTodoDelete,
}) {
  const [showEdit, setShowEdit] = useState(false);
  const [editTodoText, setEditTodoText] = useState(todo);

  return (
    <div className="list">
      {!showEdit && (
        <div>
          <div>{todo}</div>
          <div className="todo-btns">
            <button
              className="edit"
              onClick={() => {
                setShowEdit(true);
              }}>
              Edit
            </button>
            <button
              onClick={() => {
                onTodoDelete(id);
              }}
              className="delete">
              Delete
            </button>
          </div>
        </div>
      )}

      {showEdit && (
        <div>
          <form
            action="#"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              onTodoChange(id, editTodoText);

              setShowEdit(false);
            }}>
            <textarea
              className="edit-area"
              value={editTodoText}
              required
              onChange={(e) => {
                setEditTodoText(e.target.value);
              }}></textarea>
            <button className="save-btn" disabled={!editTodoText} type="submit">
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
