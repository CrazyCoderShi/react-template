/* eslint-disable react/prop-types */
import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import HomeHeader from "./components/Header"
import HomeMenu from "./components/Menu"
import "./style.scss"
import TodoPage from "../todo/index"

class HomePage extends Component {
  render() {
    return (
      <div className="rt-app-container">
        <div className="header">
          <HomeHeader />
        </div>
        <div className="menu-content">
          <HomeMenu history={this.props.history} />
          <div className="content">
            <Switch>
              <Route path="/page1" component={TodoPage} />
              <Route path="/page2" component={() => <div>page2</div>} />
              <Route exact path="/" component={TodoPage} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
