import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import HomeHeader from "./components/Header"
import HomeMenu from "./components/Menu"
import "./style.scss"
import TodoPage from "../todo/index"

class HomePage extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  onMenuItemClick = (e, value) => {
    console.log("------>", value)
  }

  render() {
    return (
      <div className="rt-app-container">
        <div className="header">
          <HomeHeader />
        </div>
        <div className="menu-content">
          <HomeMenu itemClick={this.onMenuItemClick} />
          <div className="content">
            <Switch>
              <Route path="/page1" component={TodoPage} />
              <Route path="/page2" component={() => <div>222</div>} />
              <Route exact path="/" component={TodoPage} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
