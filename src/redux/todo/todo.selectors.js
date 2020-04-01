import { createSelector } from 'reselect';

const selectTodo = state => {
  return state.todo;
}

export const selectTodoItems = createSelector(
  [selectTodo],
  todo => todo.todos
)

