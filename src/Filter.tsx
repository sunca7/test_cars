import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {

  inputDays = (e) => {
  }

  render() {
    return (
      <div className="filter-container">
        <form onSubmit={this.props.handleSubmit} >
          <label>
            Days :
          <input type="text" name="duration" value={this.props.duration} pattern="[0-9]*" onChange={this.props.inputDays} placeholder= " 1 ~ 30 days"/>
          </label>
          <label>
            km :
          <input type="text" name="distance" value={this.props.distance} pattern="[0-9]*" onChange={this.props.inputDays}  placeholder= " 50, 100, 150, ... 3000"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Filter;