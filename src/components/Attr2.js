import React from 'react';
import PropTypes from 'prop-types';
import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GiSlashedShield } from 'react-icons/gi';

class Attr2 extends React.Component {
  render() {
    const { cardAttr2, onInputChange } = this.props;
    const nunmax = 90;
    const error = <BiErrorCircle className="icon-error-attr" />;
    const validate = <AiOutlineCheckCircle className="icon-validate-attr" />;
    return (
      <label htmlFor="input-attr2" className="label-attr">
        {' '}
        Defense
        {' '}
        <GiSlashedShield className="sword" />
        <input
          id="input-attr2"
          data-testid="attr2-input"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
          name="cardAttr2"
          className="attr"
        />
        {(cardAttr2 > nunmax || cardAttr2 === '' ? error : validate)}
      </label>
    );
  }
}

Attr2.propTypes = {
  cardAttr2: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Attr2;
