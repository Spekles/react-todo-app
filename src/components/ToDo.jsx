import React, { useState } from 'react';
import { Card, Divider, Button } from 'antd';
import { ToDoItem } from './ToDoItem';
import { ToDoForm } from './ToDoForm';

export const ToDo = () => {
  const [todos, setTodos] = useState([
    {id: 1, title: 'First title', descript : 'some description', checked: false},
    {id: 2, title: 'Second title', descript : 'some description', checked: false}
  ]);
  const [idCount, setIdCount] = useState(10);

  const renderTodoItems = (todos) => {
    return (
      <ul className="todo-list">
        { todos.map(todo => <ToDoItem 
            key={todo.id}
            item={todo}
            onRemove={onRemove} 
            onCheck={onCheck} 
          />) }
      </ul>
    )
  }

  const onRemove = (id) => {
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      todos.splice(index, 1);
      setTodos([...todos]);
    }
  }

  const onSubmit = (title, descript) => {
    const todo = {
      title,
      descript,
      id: idCount,
      checked: false,
    };

    setTodos([...todos, todo]);
    setIdCount(idCount + 1);
  } 

  const removeChecked = () => { 
    let i = todos.length;
    while (i--) {
      if (todos[i].checked === true) {
          todos.splice(i, 1);
      }
    }
    
    setTodos([...todos]);
  }

  const onCheck = (id) => {
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      const todo = todos[index];
    
      todo.checked = !todo.checked;
      todos.splice(index, 1, todo);
      
      setTodos([...todos]);
    }
  }

  const numberUnChecked = () => { 
    let count = 0;
	let i = todos.length;
	
    while (i--) {
      if (todos[i].checked === false) {
          count++;
      }
    }

    return count;
  }


  return (
    <Card title={'What you need to do!'} className="todo-card">
      <ToDoForm onSubmit={onSubmit} />
      <Divider />
		{ renderTodoItems(todos) }
      <Divider />
		<p>Number of unchecked: <p className="todo-numberUnchecked">{numberUnChecked()}</p></p>
      <Divider />
		<Button danger = "true" htmlType="submit" type="primary" onClick={removeChecked}>Remove checked</Button>
    </Card>
  );
}
