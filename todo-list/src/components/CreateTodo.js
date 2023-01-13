import React, { useState } from "react";

export default function CreateTodo({ onTodoCreated }) {
    const [todo, setTodo] = useState('')
    
    return <div id="form-container">
        <form
            action="#"
            method="POST"
            onSubmit={(e) => {
                e.preventDefault();
                if (!todo) {
                    return;
                }
                onTodoCreated(todo);
                setTodo('');
            }}
        >
            <div>
                <label>Enter Todo</label>
                <textarea
                    id="task"
                    value={todo}
                    onChange={(e) => {
                        e.persist();
                        setTodo(e.target.value);
                    }}
                    style={{
                        width: 200,
                        display: "block"
                    }}
                    required
                >

                </textarea>
            </div>
            <div>
                <button id="btn" type="submit">Add</button>
            </div>
        </form>
    </div>
}

