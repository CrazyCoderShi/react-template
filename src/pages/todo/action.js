let nextTodoId = 0

export const addTodo = text => {
  console.log("---> action", text)
  return {
    type: "ADD_TODO",
    id: "10086",
    text
  }
}
