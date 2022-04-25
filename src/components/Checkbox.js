import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="checkbox-trunfo" className="label-trunfo">
        <input
          className="checkbox-trunfo"
          id="checkbox-trunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          name="cardTrunfo"
        />
        Super Trunfo

      </label>
    );
  }
}

Checkbox.propTypes = {
  cardTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
  hasTrunfo: PropTypes.bool,
}.isRequired;

export default Checkbox;
