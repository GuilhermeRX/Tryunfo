import React from 'react';
import PropTypes from 'prop-types';

class FilterName extends React.Component {
  render() {
    const { onInputChange, filterName, disabled } = this.props;
    return (
      <input
        type="text"
        placeholder="Nome da Carta"
        data-testid="name-filter"
        onChange={ onInputChange }
        value={ filterName }
        name="filterName"
        disabled={ disabled }
        className="filterName"
      />
    );
  }
}

FilterName.propTypes = {
  filterName: PropTypes.string,
  onInputChange: PropTypes.func,
  disabled: PropTypes.bool,
}.isRequired;

export default FilterName;
