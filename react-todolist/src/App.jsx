import { useState,useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App(){
  const [todos,setTodos] = useState([]);
  const [todoValues,settodoValues] = useState('');

  function presistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo];
    setTodos(newTodoList);
    presistData(newTodoList);
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo,todoIndex)=>{
      return todoIndex !== index;
    });
    setTodos(newTodoList);
    presistData(newTodoList);
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index];
    settodoValues(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(()=>{
    if(!localStorage)
      return;
    
    let localTodos = localStorage.getItem('todos');
    
    if(!localTodos)
      return;

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
    
  },[]);

  return(
    <>
      <TodoInput todoValues={todoValues} settodoValues={settodoValues} handleAddTodos = {handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo}  handleDeleteTodo={handleDeleteTodo} todos = {todos}/>
    </>
  )
}

export default App;