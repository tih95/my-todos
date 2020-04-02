import { createSelector } from 'reselect';

const selectTodo = state => {
  return state.todo;
}

export const selectTodoItems = createSelector(
  [selectTodo],
  todo => todo.todos
)

export const selectCurrentTodos = createSelector(
  [selectTodoItems],
  todoItems => todoItems.filter(todo => !todo.completed)
)

export const selectCompletedTodos = createSelector(
  [selectTodoItems],
  todoItems => todoItems.filter(todo => todo.completed)
)