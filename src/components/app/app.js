import React, { Component } from "react";
import _uniqueId from "lodash/uniqueId";
import {
    AppHeader,
    ItemStatusFilter,
    SearchPanel,
    TodoList,
    ItemAddPanel
} from "../index";

import "./app.css";

class App extends Component {
    state = {
        todoDate: [
            { label: "Drink Coffee", important: false, id: _uniqueId("prefix-"), isDone: false },
            { label: "Make React App", important: true, id: _uniqueId("prefix-"), isDone: false },
            { label: "Watch F1", important: false, id: _uniqueId("prefix-"), isDone: true },
        ]
    };

    onItemDelete = (id) => {
        this.setState(state => ({
            todoDate: state.todoDate.filter(item => item.id !== id)
        }));
    };

    onAddItem = (label) => {
        this.setState(state => ({
            todoDate: [
                ...state.todoDate,
                { label, important: false, id: _uniqueId("prefix-"), isDone: false }
            ]
        }));
    };

    onToogleFactory = (id, paramName) => {
        this.setState(({ todoDate }) => {
            const index = todoDate.findIndex(item => item.id === id);
            const el = todoDate.find(item => item.id === id);

            const newObj = [
                ...todoDate.slice(0, index),
                { ...el, [paramName]: !el[paramName] },
                ...todoDate.slice(index + 1),

            ];

            return { todoDate: newObj };
        });
    };

    onToogleDone = (id) => {
        this.onToogleFactory(id, "isDone");
    };

    onToogleImportant = (id) => {
        this.onToogleFactory(id, "important");
    };

    getToDoNumber = () => (
        this.state.todoDate.filter(el => el.isDone === false).length
    );

    getDoneNumber = () => (
        this.state.todoDate.filter(el => el.isDone === true).length
    );


    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={this.getToDoNumber()} done={this.getDoneNumber()} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoDate}
                    onItemDelete={this.onItemDelete}
                    onToogleImportant={this.onToogleImportant}
                    onToogleDone={this.onToogleDone}
                />
                <ItemAddPanel onAddItem={this.onAddItem} />
            </div>
        );
    }
}

export default App;
