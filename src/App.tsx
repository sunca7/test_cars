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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
      fetch(`http://localhost:3001/cars.json`)
      .then(response => response.json())
      .then(data => this.setState({ cars: data }));
  }
  
  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    if (this.state.duration && this.state.distance)
    {
      fetch(`http://localhost:3001/cars.json?duration=${this.state.duration}&distance=${this.state.distance}`)
        .then(response => response.json())
        .then(data => this.setState({ cars: data }));
      event.preventDefault();
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
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;