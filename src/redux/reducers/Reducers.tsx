import {
  todoInitialState,
  todoReducer,
  ITodoState,
} from "app/redux/reducers/TodoReducer";
import { combineReducers } from "redux";

export default combineReducers<IRootState>({
  todoList: todoReducer,
});

export interface IRootState {
  todoList: ITodoState;
}

export const initialState: IRootState = {
  todoList: todoInitialState,
};
