import React from 'react';
import PropTypes from 'prop-types';
import { BiErrorCircle } from 'react-icons/bi';
import PokeTrue from './imgs/poketrue.svg';
import PokeFalse from './imgs/pokefalse.svg';
import PokeIMG from './imgs/pokecel.svg';

const trueimg = <img src={ PokeTrue } alt="poketrue" className="pokeball" />;
const falseimg = <img src={ PokeFalse } alt="poketrue" className="pokeball" />;

// Pokebola ícones criados por Freepik - Flaticon
// https://www.flaticon.com/br/icones-gratis/pokebola

class InputImage extends React.Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    const error = (
      <p className="msg-error-img">
        <BiErrorCircle className="icon-error" />
        {' '}
        Este campo é de preenchimento obrigatório
      </p>);

    return (
      <>
        <label htmlFor="input-image" className="label-image">
          <p className="p-img">Imagem</p>
          <div className="img-container">
            <img src={ PokeIMG } alt="poke-cel" className="poke-cel-icon" />
            <input
              id="input-image"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
              className="input-image"
              placeholder="Digite o URL da imagem."
            />
            {(cardImage.length > 0 ? trueimg : falseimg)}
          </div>

        </label>
        {(cardImage.length === 0 && error)}
      </>

    );
  }
}

InputImage.propTypes = {
  cardAttr1: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default InputImage;
