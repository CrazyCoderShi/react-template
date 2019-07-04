import React, { Component } from "react"
import { Icon } from "office-ui-fabric-react/lib/Icon"
import "./Header.scss"

class HomeHeader extends Component {
  render() {
    return (
      <div className="header-container">
        <Icon iconName="Dictionary" className="ms-IconExample ms-IconColorExample-deepSkyBlue" />
      </div>
    )
  }
}

export default HomeHeader
