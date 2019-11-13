import React, { Component } from 'react';

class Filter extends Component {

  render() {
    return (
      <div className="filter-container">
        <form className="filter-input" onSubmit={this.props.handleSubmit} >
          <label>
            Days :  
          <input type="number" id="duration" name="duration" min="1" max="30" value={this.props.duration} pattern="[0-9]*" onChange={this.props.handleChange} placeholder= " 1 ~ 30 days"/>
          </label>
          {'  '}
          <label>
            Km :  
          <input type="number" id="distance" name="distance" min="50" max="3000" step="50" value={this.props.distance} pattern="[0-9]*" onChange={this.props.handleChange}  placeholder= " 50, 100, 150, ... 3000"/>
          </label>
          <br/><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Filter;