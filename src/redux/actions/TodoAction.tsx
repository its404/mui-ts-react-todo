import Todo from "app/models/Todo";

let nextId = 0;

export enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
}

export interface IAddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  payload: Todo;
}

export interface IToggleTodoAction {
  type: TodoActionTypes.TOGGLE_TODO;
  payload: number;
}

export function addTodo(name: string): IAddTodoAction {
  return {
    type: TodoActionTypes.ADD_TODO,
    payload: {
      id: nextId++,
      text: name,
      completed: false,
    },
  };
}

export function toggleTodo(todoId: number): IToggleTodoAction {
  return {
    type: TodoActionTypes.TOGGLE_TODO,
    payload: todoId,
  };
}

export type Action = IAddTodoAction | IToggleTodoAction;
