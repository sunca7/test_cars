import React, { Component } from 'react';
import CarItem from './CarItem';
import PropTypes from 'prop-types';

class Cars extends Component {

  render() {
    //console.log(this.props.cars);
    let carList = this.props.cars.map((car) => {
      return (<CarItem key={car.id} car={car} />)
    })

    return (
      <div className="container">
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