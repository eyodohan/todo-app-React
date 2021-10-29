import React from "react"
import TodoItem from "./TodoItem"


class TodoList extends React.Component {

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.items.map((item,index) => 
                        <TodoItem deleteItem={this.props.deleteItem} key={index} item={item}/>
                        )
                    }
                </ul>
                {
                    this.props.items.length > 0
                    ?
                    <p>
                        <button className="btn btn-outline-danger float-right btn-sm mt-3" onClick={this.props.clearItems}>Clear Items</button>
                    </p>
                    :
                    <p className="alert alert-warning">
                        Add item to start
                    </p>
                }
            </div>
        )
    }
}

export default TodoList