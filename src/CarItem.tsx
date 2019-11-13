import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarItem extends Component {

  render() {
    const { id, brand, model, picturePath, pricePerDay, pricePerKm } = this.props.car;

    return (
      <div className="card" key={id}>
        <div className="card-image">
          <img src={picturePath} alt={`${brand}'s picture`} />
          <br/><br/>
          <p>{brand} {model}</p>
          <p>Price per day : {pricePerDay} €</p>
          <p>Price per km : {pricePerKm} €</p>

          {(this.props.distance && this.props.duration) ? (
            <p>Original Price : {pricePerKm * this.props.distance + this.props.duration * pricePerDay }€</p>
          ) : null}
          {(this.props.distance && this.props.duration && this.props.duration > 1) ? (
            <p style={{ color: 'red' }}>Discounted Price: {pricePerKm * this.props.distance + this.getPriceForDuration(this.props.duration, pricePerDay) }€</p>
          ) : null}
          <br/>
        </div>
      </div>
    );
  }

  getPriceForDuration = (duration, pricePerDay) => {
    if (duration == 1) {
      return duration * pricePerDay
    } else if (duration <= 4) {
      return duration * pricePerDay * 0.9
    } else if (duration <= 10){
      return duration * pricePerDay * 0.7
    } else {
      return duration * pricePerDay * 0.5
    }
  }
}

CarItem.propTypes = {
  car: PropTypes.object.isRequired
}

export default CarItem;
