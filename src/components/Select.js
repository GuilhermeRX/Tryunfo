import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { cardRare, onInputChange } = this.props;

    return (
      <label htmlFor="select" className="label-rarity">
        Raridade
        <select
          id="select"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          name="cardRare"
          className="select-rarity"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  cardRare: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Select;
