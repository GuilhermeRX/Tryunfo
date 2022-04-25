import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';

class InputName extends React.Component {
  render() {
    const { cardName, onInputChange } = this.props;
    const error = (
      <p className="msg-error">
        <BiErrorCircle className="icon-error" />
        {' '}
        Este campo é de preenchimento obrigatório
      </p>);

    const validate = (
      <span>
        Nome
        <AiOutlineCheckCircle className="icon-validate" />
      </span>);

    return (
      <>
        <label htmlFor="input-name" className="label-name">
          {' '}
          {(cardName.length > 0 ? validate : 'Nome')}
          <input
            type="text"
            id="input-name"
            className="input-name"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
            placeholder="Digite o nome do seu pokemon."
          />
        </label>
        {(cardName.length === 0 && error)}
      </>
    );
  }
}

InputName.propTypes = {
  cardName: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default InputName;
