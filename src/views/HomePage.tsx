import Todo from "app/models/Todo";
import { addTodo, toggleTodo } from "app/redux/actions/TodoAction";
import {
  IAddTodoAction,
  IToggleTodoAction,
} from "app/redux/actions/TodoAction";
import { IRootState } from "app/redux/reducers/Reducers";
import * as React from "react";
import { connect } from "react-redux";

export interface IStateProps {
  todoList: Todo[];
}

export interface IDispatchProps {
  handleSubmit: (name: string) => IAddTodoAction;
  toggleTodo: (todoId: number) => IToggleTodoAction;
}

export interface IState {
  value: string;
}

type IProps = IStateProps & IDispatchProps;

class HomePage extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      value: "",
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <h2>Env: {process.env.ENV}</h2>
        <h1>TODO</h1>
        <form>
          <input onChange={this.onChange} value={this.state.value} />{" "}
          <button onClick={this.addTodo}>Add</button>
        </form>
        <section>{this.renderTasks()}</section>
      </div>
    );
  }

  public renderTasks(): JSX.Element[] {
    return this.props.todoList.map((todo: Todo, index: number) => {
      return (
        <div key={index}>
          {todo.text} - {todo.completed ? "completed" : "incompleted"} &nbsp;
          <button onClick={this.toggleTodo(todo.id)}>Toggle</button>
        </div>
      );
    });
  }

  private onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      value: event.currentTarget.value,
    });
  }

  private addTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState({
      value: "",
    });
  }

  private toggleTodo = (todoId: number) => (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    this.props.toggleTodo(todoId);
  }
}

const mapStateToProps = (state: IRootState): IStateProps => ({
  todoList: state.todoList.todoList,
});

const mapDispatchToProps = {
  handleSubmit: addTodo,
  toggleTodo,
};

export default connect<IStateProps, IDispatchProps, {}, IRootState>(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
