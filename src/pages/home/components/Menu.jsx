import React, { Component } from "react"
import { Nav, Icon } from "office-ui-fabric-react/lib"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

class HomeMenu extends Component {
  static propTypes = {
    itemClick: PropTypes.func
  }

  /// link render
  onRenderLink = props => {
    return (
      <Link
        className={props.className}
        style={{ color: "inherit", boxSizing: "border-box" }}
        to={props.href}
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
      <div>
        <Nav
          linkAs={this.onRenderLink}
          onLinkClick={this.props.itemClick}
          expandedStateText="expanded"
          collapsedStateText="collapsed"
          selectedKey="key4"
          expandButtonAriaLabel="Expand or collapse"
          styles={{
            root: {
              width: 208,
              height: 350,
              boxSizing: "border-box",
              border: "1px solid #eee",
              overflowY: "auto"
            }
          }}
          groups={[
            {
              links: [
                {
                  name: "分组",
                  links: [
                    {
                      name: "页面1",
                      url: "/page1",
                      key: "key1"
                    },
                    {
                      name: "页面2",
                      url: "/page2",
                      key: "key2",
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
