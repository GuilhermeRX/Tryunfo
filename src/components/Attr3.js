import React from 'react';
import PropTypes from 'prop-types';
import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GiMorgueFeet } from 'react-icons/gi';

class Attr3 extends React.Component {
  render() {
    const { cardAttr3, onInputChange } = this.props;
    const nunmax = 90;
    const error = <BiErrorCircle className="icon-error-attr" />;
    const validate = <AiOutlineCheckCircle className="icon-validate-attr" />;
    return (
      <label htmlFor="input-attr3" className="label-attr">
        {' '}
        Speed
        {' '}
        <GiMorgueFeet className="sword" />
        <input
          id="input-attr3"
          data-testid="attr3-input"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
          name="cardAttr3"
          className="attr"
        />
        {(cardAttr3 > nunmax || cardAttr3 === '' ? error : validate)}
      </label>
    );
  }
}

Attr3.propTypes = {
  cardAttr3: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Attr3;
