import React, { Component } from "react";
import _uniqueId from "lodash/uniqueId";

import "./item-status-filter.css";

const createButton = (label, name) => ({
    id: _uniqueId("b-"),
    label,
    name
});

class ItemStatusFilter extends Component {
    state = {
        activeFilter: "all"
    };

    buttons = [
        createButton("All", "all"),
        createButton("Active", "todo"),
        createButton("Done", "done"),
    ];

    handleFilterStatus = (e) => {
        const { onItemsFilter } = this.props;
        onItemsFilter(e.target.name);
        this.setState({
            activeFilter: e.target.name
        });
    };

    getClassName = (status) => {
        let className = "btn ";

        if (status === this.state.activeFilter) {
            className += "btn-info";
        } else {
            className += "btn-outline-secondary";
        }

        return className;
    };

    render() {
        return (
            <div className="btn-group">
                {
                    this.buttons.map(({ id, name, label }) => (
                        <button
                            key={id}
                            onClick={this.handleFilterStatus}
                            type="button"
                            name={name}
                            className={this.getClassName(name)}
                        >
                            {label}
                        </button>
                    ))
                }
            </div>
        );
    }
}

export default ItemStatusFilter;
