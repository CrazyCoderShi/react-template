import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import { PrimaryButton } from "office-ui-fabric-react/lib/Button"
import { connect } from "react-redux"
import { addTodo } from "./pages/todo/action"

class App extends Component {
  componentDidMount() {
    console.log("--->", this.props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <PrimaryButton
            text="标题"
            onClick={() => {
              this.props.addTodoAction("新的代办事项")
            }}
            primary
          />
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("---> ss", state)
  return {
    todos: state.todos,
    otherState: "otherState"
  }
}

const mapDispatchToProps = dispatch => ({
  addTodoAction: text => dispatch(addTodo(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
