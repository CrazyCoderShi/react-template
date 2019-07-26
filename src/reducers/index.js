import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import todos from "../pages/todo/reducer"

export default function createRootReducer(history = {}) {
  const routerReducer = connectRouter(history)

  return connectRouter(history)(
    combineReducers({
      router: routerReducer,
      todos
    })
  )
}
