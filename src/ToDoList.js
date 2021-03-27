import React from 'react';
import './index.css';

class ToDoList extends React.Component {

    render(){
        return (
            <ol>
                {this.props.items.map(item => (
                    <li className={item.option === 'unimportant' ? 'unimportant' : 
                    item.option === 'important' ? 'important' : 'urgent'
                    } key={item.id}>{item.text}</li>
                ))}
            </ol>

        )

    }

}


export default ToDoList;