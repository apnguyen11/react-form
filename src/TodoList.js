import React from "react";
import TodoForm from "./TodoForm"
import Todo from "./Todo"

export default class TodoList extends React.Component{
    state = {
        todos: []
    }

    addTodo = (todo) => {
    
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id) => {
        this.setState({
           
            todos: this.state.todos.map(todo => {
                
                if(todo.id === id){
                //supposed to update\
                    return{
                        id: todo.id,
                        text: todo.text,
                        complete: !todo.complete
                    }
                    

                } else {
                    return todo;
                }
            })
        })
    }

    // handleDeleteTodo({
    //     this.setState({

    //     })
    // })
    render(){
        return(
            <div>
                <TodoForm onSubmit={this.addTodo}/>
                {this.state.todos.map(todo => (
                     <Todo key={todo.id} toggleComplete={
                         (() => this.toggleComplete(todo.id))
                     } 
                     onDelete={() => this.handleDeleteTodo(todo.id)}
                     todo={todo}/>
                ))}
                <div>todos left: {this.state.todos.filter(todo =>!todo.complete).length}</div>
            </div>
        )
    }
}