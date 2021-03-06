import React, { Component } from 'react';
import CarItem from './CarItem';
import PropTypes from 'prop-types';

class Cars extends Component {

  render() {
    let carList = this.props.cars.map((car) => {
      return (<CarItem key={car.id} car={car} duration={this.props.duration} distance={this.props.distance}/>)
    })

    return (
      <div className="car-container">
        <div className="box">
          {carList}
        </div>
      </div>
    );
  }
}

Cars.propTypes = {
  cars: PropTypes.array.isRequired
}

export default Cars;