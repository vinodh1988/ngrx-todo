// todo.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoAdapter, TodoState } from '../reducers/todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const { selectAll: selectAllTodos } = todoAdapter.getSelectors(selectTodoState);

export const selectCompletedTodos = createSelector(
  selectAllTodos,
  todos => todos.filter(todo => todo.completed)
);

export const selectTodoById = (id: number) =>
  createSelector(
    selectAllTodos,
    todos => todos.find(todo => todo.id === id)
  );
