
Query --------------------

- Get All Todos

{
  getAllTodos {
    name
    id 
    completed
    date


  }
}


- Get Todo
{
  getTodo(id: 1) {
    name
    id
    date 


  }
}

- get completed todos
{
  getCompletedTodos{
    name
    id
    date 


  }
}


Mutation ----------------------------
- Add To Do

mutation {
  addTodo(name: "new Mutation", completed: false, id: 57, date: "12/12/12"){
    name 
    date
    completed
    id 
  }
}

Complete Todo 
mutation {
  completeTodo(id: 1){
    name 
  }
}

