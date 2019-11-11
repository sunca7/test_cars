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

    this.inputDays = this.inputDays.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
      fetch(`http://localhost:3001/cars.json`)
      .then(response => response.json())
      .then(data => this.setState({ cars: data }));
  }
  
  inputDays = (event) => {
  //  if (event.target.value >= 1 && event.target.value <= 30)
  //  {
      this.setState({[event.target.name]: event.target.value});
  //  }
  }

  handleSubmit = () => {
    if (this.state.duration && this.state.distance)
    {
      fetch(`http://localhost:3001/cars.json?duration=${this.state.duration}&distance=${this.state.distance}`)
        .then(response => response.json())
        .then(data => this.setState({ cars: data }));
    }
    else {
      alert('Please fill the days and km infos');
      event.preventDefault();
    }
    
  };

  render() {
    return (
      <div className="App">
        <Home cars={this.state.cars} 
              duration={this.state.duration}
              distance={this.state.distance}
              inputDays={this.inputDays}
              handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;