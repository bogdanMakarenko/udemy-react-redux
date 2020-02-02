import React from "react";

import "./todo-list-item.css";

const TodoListItem = (props) => {
    const { label, isDone, important,
        onItemDelete, onToogleImportant, onToogleDone } = props;

    let classNames = "todo-list-item";
    if (isDone) {
        classNames += " done";
    }

    if (important) {
        classNames += " important";
    }

    return (
        <span className={classNames}>
            <span
                onClick={onToogleDone}
                className="todo-list-item-label"
            >
                {label}
            </span>

            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToogleImportant}
            >
                <i className="fa fa-exclamation" />
            </button>

            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onItemDelete}
            >
                <i className="fa fa-trash-o" />
            </button>
        </span>
    );
};

export default TodoListItem;
