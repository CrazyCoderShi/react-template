import React, { Component } from "react"
import { PrimaryButton } from "office-ui-fabric-react/lib/Button"

class TodoList extends Component {
  onClickAction = () => {
    this.props.history.push("/page2")
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <PrimaryButton primary text="添加" onClick={this.onClickAction} />
      </div>
    )
  }
}

export default TodoList
