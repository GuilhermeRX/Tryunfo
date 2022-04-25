import React from 'react';
import PropTypes from 'prop-types';
import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GiSwordSlice } from 'react-icons/gi';

class Attr1 extends React.Component {
  render() {
    const { cardAttr1, onInputChange } = this.props;
    const nunmax = 90;
    const error = <BiErrorCircle className="icon-error-attr" />;
    const validate = <AiOutlineCheckCircle className="icon-validate-attr" />;
    return (
      <label htmlFor="input-attr1" className="label-attr">
        {' '}
        Attack
        {' '}
        <GiSwordSlice className="sword" />
        <input
          id="input-attr1"
          data-testid="attr1-input"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
          name="cardAttr1"
          className="attr"
        />
        {(cardAttr1 > nunmax || cardAttr1 === '' ? error : validate)}
      </label>
    );
  }
}

Attr1.propTypes = {
  cardAttr1: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Attr1;
