import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

        useEffect(() => {
          localStorage.setItem("todos", JSON.stringify(todos));
        }, [todos]);

        const handleNewTodo = (todo) => {
          const action = {
            type: "Add Todo",
            payload: todo,
          };
          dispatch(action);
        };

        const handleDeleteTodo = (id) => {
          dispatch({
            type: "Remove Todo",
            payload: id,
          });
        };

        const handleToggleTodo = (id) => {
          dispatch({
            type: "Toggle Todo",
            payload: id,
          });
        };

        const todosCount = todos.length; 

        const pendingTodosCount = todos.filter((todo) => !todo.done).length;


  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount, 
    pendingTodosCount
  }
}
