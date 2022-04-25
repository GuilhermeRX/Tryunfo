import React from 'react';
import PropTypes from 'prop-types';
import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

class DescriptionInput extends React.Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    const error = (
      <p className="msg-error">
        <BiErrorCircle className="icon-error" />
        {' '}
        Este campo é de preenchimento obrigatório
      </p>);

    const validate = (
      <span>
        Descrição
        <AiOutlineCheckCircle className="icon-validate" />
      </span>);

    const descrition = 'Ex: Ele cospe fogo para derreter pedregulhos...';

    return (
      <>
        <label htmlFor="textarea-description" className="label-textarea">
          {' '}
          {(cardDescription.length > 0 ? validate : 'Descrição')}
          <textarea
            id="textarea-description"
            className="textarea-description"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
            placeholder={ descrition }
          />
        </label>
        {(cardDescription.length === 0 && error)}
      </>
    );
  }
}

DescriptionInput.propTypes = {
  cardDescription: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default DescriptionInput;
