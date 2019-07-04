import React, { Component } from "react"
import { PrimaryButton } from "office-ui-fabric-react/lib/Button"

import "./style.scss"

class HomePage extends Component {
  render() {
    return (
      <div className="rt-app-container">
        <PrimaryButton
          text="主页按钮"
          primary
          onClick={() => {
            console.log("1111")
          }}
        />
      </div>
    )
  }
}

export default HomePage
