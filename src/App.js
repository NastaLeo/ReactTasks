import React from 'react';
import ToDoList from './ToDoList'
import './index.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [], text: '', option: '' };
    this.handleChange = this.handleChange.bind(this);
    this.optionChange = this.optionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  };
  
  handleChange(event){
    this.setState({
      text: event.target.value,
    });
  };


  optionChange(event){
    this.setState(state => ({
      option: event.target.value,
    }));
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.text.trim().length === 0 || this.state.option.length === 0) return;
    
    const newItem = {
      text: this.state.text,
      option: this.state.option,
      id: new Date()
    }

    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '', 
      option: ''
    }));
  
  };



  render(){
    return (
      <div className="block">
        <h3>Here you can create your own ToDoList:</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            onChange={this.handleChange}
            value={this.state.text}/>
            <div className="row">  
              <select  onChange={this.optionChange} value={this.state.option}>
                <option hidden>Choose task priority</option>
                <option value="unimportant">Unimportant</option>
                <option value="important">Important</option>
                <option value="urgent">Urgent</option>
              </select>
              <button type='submit'>Add</button> 
            </div>
        </form>

        <ToDoList items={this.state.items} />
         
      </div>
    
    )
  }
};

export default App;
