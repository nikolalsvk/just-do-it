import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [], currentItem: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({currentItem: event.target.value});

    event.preventDefault();
  }

  handleSubmit(event) {
    this.setState(prevState => ({
      items: [...prevState.items, this.state.currentItem],
      currentItem: '',
    }));

    event.preventDefault();
  }

  render() {
    const {items, currentItem} = this.state;

    return (
      <div>
        <ul id="todo-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={currentItem} onChange={this.handleChange} />{' '}
          <input type="submit" value="Add a TODO" />
        </form>
      </div>
    );
  }
}

export default TodoList;
