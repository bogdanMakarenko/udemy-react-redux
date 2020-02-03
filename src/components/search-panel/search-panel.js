import React, { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
    state = {
        value: ""
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
        this.props.onSearch(e.target.value);
    };

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="type to search"
                value={this.state.value}
                onChange={this.handleChange}
            />
        );
    }
}

export default SearchPanel;
