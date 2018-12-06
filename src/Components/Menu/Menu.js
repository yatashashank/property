import React, { Component } from 'react';
import "./Menu.css";

class Menu extends Component {

    render() {
        if (this.props.show) return null;
        return (
            <div className="menu">
            

            </div>


        );
    }
}
export default Menu;
