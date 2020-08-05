export const ADD_TODO = 'ADD_TODO';
export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = (todoId) => ({
  type: TOGGLE_TODO,
  todoId,
});

export const SET_TEXT = 'SET_TEXT';
export const setText = (text) => ({
  type: SET_TEXT,
  text,
});

export const SET_EDITING_TODO = 'SET_EDITING_TODO';
export const setEditingTodo = (todo) => ({
  type: SET_EDITING_TODO,
  todo,
});

export const UPDATE_TODO = 'UPDADE_TODO';
export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  todo,
});
