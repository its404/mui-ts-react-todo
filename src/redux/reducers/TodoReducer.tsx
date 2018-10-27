import Todo from "app/models/Todo";
import { Action, TodoActionTypes } from "app/redux/actions/TodoAction";

export interface ITodoState {
  todoList: Todo[];
}

export const todoInitialState: ITodoState = {
  todoList: [],
};

export function todoReducer(
  state: ITodoState = todoInitialState,
  action: Action,
) {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }
    case TodoActionTypes.TOGGLE_TODO: {
      return {
        ...state,
        todoList: state.todoList.map(
          todo =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo,
        ),
      };
    }
    default:
      return state;
  }
}
