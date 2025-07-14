import { Component } from "react";

class Count extends Component{
    constructor(props) {
        super(props);
        
        
    }


    render() {
        return(
            <>
                <div>Number of tasks:</div>
                <div>{this.props.todos.length}</div>
            </>
        )
    }

}


export default Count;