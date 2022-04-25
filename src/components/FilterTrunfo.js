import React from 'react';
import PropTypes from 'prop-types';

class FilterTrunfo extends React.Component {
  render() {
    const { onInputChange, filterTrunfo } = this.props;
    return (
      <label htmlFor="filterTrunfo" className="label-filterTrunfo">
        <input
          type="checkbox"
          name="filterTrunfo"
          data-testid="trunfo-filter"
          id="filterTrunfo"
          checked={ filterTrunfo }
          onChange={ onInputChange }
          className="filterTrunfo"
        />
        Super Trunfo
      </label>
    );
  }
}

FilterTrunfo.propTypes = {
  filterTrunfo: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default FilterTrunfo;
