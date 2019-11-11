import React, { Component } from 'react';
import Cars from './Cars';
import Navbar from './Navbar';
import Filter from './Filter';

class Home extends Component {

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="title">
                    <span>Our cars</span>
                </div>
                <div className="filter-box">
                    <Filter handleChange={this.props.handleChange} duration={this.props.duration} distance={this.props.distance} handleSubmit={this.props.handleSubmit} />
                </div>
                <Cars cars={this.props.cars} duration={this.props.duration} distance={this.props.distance}/>
            </div>
        )
    }
}

export default Home; 