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

    addNewItem = () => {
        const { onAddItem } = this.props;
        onAddItem(this.state.newItem);
        this.clearInput();
    };

    render() {
        return (
            <div className="item-add-panel input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="type to add todo item"
                    onChange={this.handleInputChange}
                    value={this.state.newItem}
                />
                <div className="input-group-append">
                    <button
                        type="button"
                        className="btn btn-md btn-outline-warning float-right"
                        onClick={this.addNewItem}
                    >
                        <i className="fa fa-plus-circle" />
                    </button>
                </div>
            </div>

        );
    }
}

export default ItemAddPanel;
