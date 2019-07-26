import React, { Component } from "react"
import { Nav, Icon } from "office-ui-fabric-react/lib"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import "./Menu.scss"

class HomeMenu extends Component {
  static propTypes = {
    itemClick: PropTypes.func
  }

  state = {
    selectedKey: "/page1"
  }

  onItemClickAction = link => () => {
    console.log(link)
    this.setState({ selectedKey: link.href })
    // this.props.itemClick()
  }

  /// link render
  onRenderLink = props => {
    return (
      <Link
        className={props.className}
        style={{ color: "inherit", boxSizing: "border-box" }}
        to={props.href}
        onClick={this.onItemClickAction(props)}
      >
        <span style={{ display: "flex" }}>
          {!!props.iconProps && <Icon style={{ margin: "0 4px" }} {...props.iconProps} />}
          {props.children}
        </span>
      </Link>
    )
  }

  render() {
    return (
      <div className="rt-menu-contianer">
        <Nav
          linkAs={this.onRenderLink}
          onLinkClick={this.onItemClickAction}
          expandedStateText="expanded"
          collapsedStateText="collapsed"
          selectedKey={this.state.selectedKey}
          expandButtonAriaLabel="Expand or collapse"
          groups={[
            {
              links: [
                {
                  name: "分组",
                  links: [
                    {
                      name: "页面1",
                      url: "/page1",
                      key: "/page1",
                      icon: "News"
                    },
                    {
                      name: "页面2",
                      url: "/page2",
                      key: "/page2",
                      icon: "News"
                    }
                  ],
                  isExpanded: true
                }
              ]
            }
          ]}
        />
      </div>
    )
  }
}

export default HomeMenu
