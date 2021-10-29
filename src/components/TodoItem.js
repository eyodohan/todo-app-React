
import React from "react"

class TodoItem extends React.Component {
    constructor(props){
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }
    deleteItem(){
        this.props.deleteItem(this.props.item)  
    }
    render () {
        return (

            <li className="list-group-item">
                {this.props.item}
                <button className="btn btn-danger btn-sm float-right" onClick={this.deleteItem}>x</button>
            </li>
        )
    }
}



export default TodoItem