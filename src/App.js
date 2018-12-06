import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import { Switch, Route } from "react-router-dom";
import Details from "./Components/Property/details";
import Main from "./Components/Property/main";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="app">
        <Header onclick={this.handleClick} />
        <div className="app-body">
          <Menu show={this.state.show} />
          <div className="content">
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/details/:id" component={Details} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
