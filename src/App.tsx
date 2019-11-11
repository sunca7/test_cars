import React, { Component } from 'react';
import './index.css';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      duration: '',
      distance: ''
    };
  }


  componentDidMount() {

    if (this.state.duration)
    {
      console.log('hi')
      fetch('/cars.json', { duration: this.state.duration})
      .then(response => response.json())
      .then(data => this.setState({ cars: data }));
    }
    else {
      fetch('/cars.json')
      .then(response => response.json())
      .then(data => this.setState({ cars: data }));
    }
  }
  
  inputDays = () => {
    if (event.target.value >= 1 && event.target.value <= 30)
    {
      this.setState({duration: event.target.value});
      console.log(this.state.duration)
    }
  }

  render() {
    return (
      <div className="App">
        <Home cars={this.state.cars} inputDays={this.inputDays} days={this.state.duration}/>
      </div>
    );
  }
}

export default App;