import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { initializeIcons } from "office-ui-fabric-react/lib/Icons"
import { ConnectedRouter } from "connected-react-router"
import { createBrowserHistory } from "history"

import HomePage from "./pages/home/index"
import configureStore from "./config/configureStore"
import * as serviceWorker from "./serviceWorker"

initializeIcons()

const store = configureStore()
const history = createBrowserHistory()

const renderApp = () =>
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HomePage history={history} />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  )

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./pages/home/", renderApp)
}

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
