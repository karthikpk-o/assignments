/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor()
  {
    this.todos = [];
  }

  add(todo)
  {
    this.todos.push(todo);
  }

  remove(todo_index)
  {
    if (todo_index >= 0 && todo_index < this.todos.length) {
      this.todos.splice(todo_index, 1);
    }
  }

  update(index, updatedTodo)
  {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  getAll()
  {
    return this.todos;
  }

  get(index)
  {
    if(index >=0 && index < this.todos.length)
    {
      return this.todos[index];
    }
    else
      return null;
  }

  clear()
  {
    this.todos = [];
  }

}

module.exports = Todo;
