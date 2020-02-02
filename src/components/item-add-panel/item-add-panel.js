import React, { Component } from "react";

import "./item-add-panel.css";

class ItemAddPanel extends Component {
    state = {
        newItem: ""
    };

    handleInputChange = (e) => {
        this.setState({
            newItem: e.target.value
        });
    };

    clearInput = () => {
        this.setState({
            newItem: ""
        });
    };

    addNewItem = (e) => {
        e.preventDefault();
        const { onAddItem } = this.props;
        onAddItem(this.state.newItem);
        this.clearInput();
    };

    render() {
        return (
            <form
                className="item-add-panel input-group mb-3"
                onSubmit={this.addNewItem}
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="type to add todo item"
                    onChange={this.handleInputChange}
                    value={this.state.newItem}
                />
                <div className="input-group-append">
                    <button
                        type="submit"
                        className="btn btn-md btn-outline-warning float-right"
                    >
                        <i className="fa fa-plus-circle" />
                    </button>
                </div>
            </form>

        );
    }
}

export default ItemAddPanel;
