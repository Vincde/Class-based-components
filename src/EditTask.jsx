import { Component } from "react";

class EditTask extends Component{
    constructor(props){
        super(props);

        this.state = {
            open: 0,
            inputVal: "",
        }


        this.changeOpen = this.changeOpen.bind(this);
        this.changeTodo = this.changeTodo.bind(this);
        this.setInputVal = this.setInputVal.bind(this);
    }


    changeOpen(){
        let newOpen;
        if(this.state.open === 1){
            newOpen = 0;
        }else{
            newOpen = 1;
        }
        this.setState((state) => ({
            open: newOpen,
            inputVal: state.inputVal,
        }));
    }


    changeTodo(newValue) {
        const newArray = this.props.allTodos.map((todo) => {
            if(todo === this.props.todo){
                return newValue;
            }
            return todo;
        });
        this.props.handleChangeState(newArray);
        this.changeOpen();
    }


    setInputVal(e){
        this.setState((state) => ({
            open: state.open,
            inputVal: e.target.value,
        }));
    }


    render(){
        const changeTodo = <div>
            <label htmlFor="changeVal">New Value</label>
            <input type="text" id="changeVal" onChange={this.setInputVal}/>
            <button onClick={() => this.changeTodo(this.state.inputVal)}>reSubmit</button>
        </div>

        const clickButton = <button onClick={this.changeOpen}>change</button>
        return(
            <>
            {this.state.open === 0 ? clickButton : changeTodo}
            </>
        )
    }
}


export default EditTask;