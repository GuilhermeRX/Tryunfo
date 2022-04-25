import React from 'react';
import PropTypes from 'prop-types';

class FilterRare extends React.Component {
  render() {
    const { onInputChange, filterRare, disabled } = this.props;
    return (
      <select
        name="filterRare"
        data-testid="rare-filter"
        value={ filterRare }
        onChange={ onInputChange }
        disabled={ disabled }
        className="filterRare"
      >

        <option value="todas">Todas</option>
        <option value="normal">Normal</option>
        <option value="raro">Raro</option>
        <option value="muito raro">Muito Raro</option>
      </select>
    );
  }
}

FilterRare.propTypes = {
  filterRare: PropTypes.string,
  onInputChange: PropTypes.func,
  disabled: PropTypes.bool,
}.isRequired;

export default FilterRare;
