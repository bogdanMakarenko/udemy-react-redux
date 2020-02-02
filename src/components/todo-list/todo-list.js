import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";

import "./todo-list.css";

const TodoList = ({ todos, onItemDelete, onToogleDone, onToogleImportant }) => {
    const items = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onToogleDone={() => onToogleDone(id)}
                    onToogleImportant={() => onToogleImportant(id)}
                    onItemDelete={() => onItemDelete(id)}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {items}
        </ul>
    );
};

export default TodoList;

