import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from "history"

import monitorReducersEnhancer from "../enhancers/monitorReducers"
import createRootReducer from "../reducers"

export default function configureStore(preloadedState) {
  const history = createBrowserHistory()
  const rootReducer = createRootReducer(history)
  const router = routerMiddleware(history)

  const middlewares = [thunkMiddleware, router]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composeEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composeEnhancers)

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../reducers", () => store.replaceReducer(rootReducer))
  }

  return store
}
