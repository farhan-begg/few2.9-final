const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");


const todoData = [
    {
        name: "fgdfgdfg",
        completed: true,
        date: "13/234/34",
        id: 1
    },
    {
        name: "LASDASD",
        completed: true,
        date: "1/2/21",
        id: 2
    },
    {
        name: "LSADSDAFASD",
        completed: false,
        date: "1/2/21",
        id: 3
    },
]



// Create a schema
const schema = buildSchema(`
    type Todo {
        name: String!
        completed: Boolean
        date: String!
        id: ID!
    }

    type Query {
        getAllTodos: [Todo!]!
        getTodo(id: ID!): [Todo]!
        getCompletedTodos: [Todo]!
    }

    type Mutation {
        addTodo(name: String!, date: String!, completed: Boolean!, id: ID!): Todo
        completeTodo( id: Int!): Todo
    }
`);



//Define a resolver
const root = {
    getAllTodos: () =>  todoData,

    getTodo: ( { id }) => todoData.filter(i => i.id == id),
    
    getCompletedTodos: () => todoData.filter(i => i.completed == true),

    addTodo: ({ name, completed, id, date}) => {
       const todo = {
           name,
           date,
           completed,
           id
       };
       todoData.push(todo)
       return todo

    },

    completeTodo: ({ id, completed }) => {
            const compList = todoData.filter(i => i.id == id)
            if(compList.length === 0){
                return null
            }
            compList[0].completed = completed
            return compList[0]
        }

};

// Create an express app
const app = express();

// Define a route for GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

// Start this app
const port = 4000;
app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
