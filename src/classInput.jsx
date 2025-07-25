import { Component } from "react";
import Count from "./Count";
import EditTask from "./EditTask";


class ClassInput extends Component{
    constructor(props){
        super(props);

        this.state= {
            todos: [],
            inputVal: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTaskDeletion = this.handleTaskDeletion.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
    }


    handleInputChange(e){
        this.setState((state) => ({
            ...state,
            inputVal: e.target.value,
        }));
    }


    handleSubmit(e){
        e.preventDefault();
        this.setState((state) => ({
            todos: state.todos.concat(state.inputVal),
            inputVal: "",
        }));
    }

    handleTaskDeletion(key){
        const newInput = this.state.todos.filter((todo) => {
            return todo !== key;
        });
        this.setState((state) => ({
            todos: [...newInput],
            inputVal: state.inputVal,
        }));
    }

    handleChangeState(newTodos){
        this.setState((state) => {
            return({
                todos: [...newTodos],
                inputVal: state.inputVal,
            })
        });
    }



    render(){
        return(
            <section>
                <h3>{this.props.name}</h3>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task-entry">Enter a task: </label>
                    <input type="text" id="task-entry" name="task-entry" value={this.state.inputVal}
                    onChange={this.handleInputChange} />
                    <button type="submit">Submit</button>
                </form>

                <h4>All the tasks!</h4>
                <ul>
                    {this.state.todos.map((todo) => (
                        <>
                        <li key={todo}>{todo}</li>
                        <button onClick={() => this.handleTaskDeletion(todo)}>Delete task</button>
                        <EditTask todo={todo} allTodos={this.state.todos} handleChangeState={this.handleChangeState}></EditTask>
                        </>
                    ))}
                </ul>

                <Count todos={this.state.todos}></Count>

            </section>
        )
    }
}


export default ClassInput;