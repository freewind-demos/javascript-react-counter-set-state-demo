import React, {Component} from 'react';

class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increaseCount = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.increaseCount}>Click Me
      </button>
    </div>;
  }
}

export default Hello;
