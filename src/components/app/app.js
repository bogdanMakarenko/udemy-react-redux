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

const createListItem = label => ({
    id: _uniqueId("k-"),
    important: false,
    isDone: false,
    label,
});

class App extends Component {
    state = {
        todoData: [
            createListItem("Drink Coffee"),
            createListItem("Listen The Weekend album"),
            createListItem("Make React App"),
            createListItem("Make video from travels"),
        ],
        query: "",
        filter: "all"
    };

    onItemDelete = (id) => {
        this.setState(state => ({
            todoData: state.todoData.filter(item => item.id !== id)
        }));
    };

    onAddItem = (label) => {
        this.setState(state => ({
            todoData: [
                ...state.todoData,
                createListItem(label),
            ]
        }));
    };

    onToogleFactory = (id, paramName) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex(item => item.id === id);
            const oldItem = todoData[index];

            const newObj = [
                ...todoData.slice(0, index),
                { ...oldItem, [paramName]: !oldItem[paramName] },
                ...todoData.slice(index + 1)
            ];

            return { todoData: newObj };
        });
    };

    onToogleDone = (id) => {
        this.onToogleFactory(id, "isDone");
    };

    onToogleImportant = (id) => {
        this.onToogleFactory(id, "important");
    };

    search = (items, query) => {
        if (query.length === 0) {
            return items;
        }
        return items.filter(el => el.label.toLowerCase().includes(query.toLowerCase()));
    };

    onSearch = (query) => {
        this.setState({
            query
        });
    };

    filterItemsByStatus = (items, filter) => {
        switch (filter) {
        case "todo":
            return items.filter(el => !el.isDone);
        case "done":
            return items.filter(el => el.isDone);
        default:
            return items;
        }
    };

    setFilter = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { todoData, query, filter } = this.state;

        const doneCount = todoData
            .filter(el => el.isDone).length;
        const toDoCount = todoData.length - doneCount;
        const visibleItems = this.filterItemsByStatus(this.search(todoData, query), filter);

        return (
            <div className="todo-app">
                <AppHeader toDo={toDoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearch={this.onSearch} />
                    <ItemStatusFilter onItemsFilter={this.setFilter} />
                </div>
                <TodoList
                    todos={visibleItems}
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
