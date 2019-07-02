import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { PrimaryButton, ActionButton } from "office-ui-fabric-react/lib/Button"

function App() {
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
        <PrimaryButton text="标题" onClick={() => {}} primary />
        <ActionButton text="测试" />
      </header>
    </div>
  )
}

export default App
