import React, { Component } from 'react';
import Cars from './Cars';
import Navbar from './Navbar';
import Filter from './Filter';

class Home extends Component {

    inputDays = () => {
        console.log('Hello')
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="title">
                    <span>Our cars</span>
                </div>
                <div className="filter">
                    <Filter inputDays={this.props.inputDays} />
                </div>
                <Cars cars={this.props.cars} days={this.props.days}/>
            </div>
        )
    }
}

export default Home; 