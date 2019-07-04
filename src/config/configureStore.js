import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import monitorReducersEnhancer from "../enhancers/monitorReducers"
import rootReducer from "../reducers"

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composeEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composeEnhancers)

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../reducers", () => store.replaceReducer(rootReducer))
  }

  return store
}