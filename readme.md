Mutation ----

mutation {
  addTodo(name: "new Mutation", completed: false, id: 57, date: "12/12/12"){
    name 
    date
    completed
    id 
  }
}


Query ----

{
  getAllTodos {
    name
    id 
    completed
    date


  }
}



{
  getTodo(id: 1) {
    name
    id
    date 


  }
}


{
  getCompletedTodos{
    name
    id
    date 


  }
}


mutation {
  completeTodo(id: 1){
    name 
  }
}

# few2.9-final
# few2.9-final
# few2.9-final
