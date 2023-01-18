import React from "react";

export class TodoForm extends React.Component {
  constructor() {
    super();

    //this.todoName = "";
    //this.todoContent = "";
    this.state = {
      todoName: "",
      todoContent: ""
    }
  }

  handleSaveTodo() {
    console.log(this.state.todoName);
    console.log(this.state.todoContent);
  }

  handleValueChange(event, propertyName) {
    let stateChange = {}
    stateChange[propertyName] = event.target.value;

    console.log(stateChange);

    this.setState(stateChange)
    //this[propertyName] = event.target.value;
  }

  render() { // React använder "render" för att visa innehållet
    return (
      <div>
        <div>
          <label>Todo name</label>
          <input
            onChange={(event) => this.handleValueChange(event, "todoName")}
            /*onChange={(event) => this.todoName = event.target.value}*/
            type="text"
            placeholder="write todo name" />
        </div>

        <div>
          <label>Todo content</label>
          <input
            onChange={(event) => this.handleValueChange(event, "todoContent")}
            type="text"
            placeholder="Write todo content" />
        </div>

        <div>
          <p>{this.state.todoName}</p>
          <p>{this.state.todoContent}</p>
        </div>
        <button onClick={this.handleSaveTodo}>Save todo</button>
      </div>
    )
  }
}