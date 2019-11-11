import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {

  inputDays = (e) => {
    console.log("hi")
    console.log(this.props)
  }

  render() {
    return (
      <div className="filter-container">
        <form >
          <label>
            Days :
          <input type="text" onChange={this.props.inputDays} placeholder= " 1 ~ 30 days"/>
          </label>
          <input type="submit" value="Submit" /> {'   '}
          <label>
            km :
          <input type="text" placeholder= " 50, 100, 150, ... 3000"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Filter;