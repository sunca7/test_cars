import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarItem extends Component {
  
  render() {
    const {id, brand, model, picturePath, pricePerDay, pricePerKm} = this.props.car;

    return (
        <div className="card" key={id}>
          <div className="card-image">
             <img src={picturePath} alt={`${brand}'s picture`}/>
             <span className="card-title">{brand} {model}</span>
          </div>

          <div className="card-content">
            <p>Price per day : {pricePerDay} €</p>
            <p>Price per km : {pricePerKm} €</p>
          </div>
      
        </div>
    );
  }
}

CarItem.propTypes = {
    car: PropTypes.object.isRequired
  }

const itemStyle = {
    backgroundColor: '#f4f4f4'
}

export default CarItem;