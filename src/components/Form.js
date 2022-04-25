import React from 'react';
import PropTypes from 'prop-types';
import Attr1 from './Attr1';
import Attr2 from './Attr2';
import Attr3 from './Attr3';
import ButtonSalvar from './ButtonSalvar';
import Checkbox from './Checkbox';
import DescriptionInput from './DescriptionInput';
import InputImage from './InputImage';
import InputName from './InputName';
import Select from './Select';
import './css/Form.css';
import Logo from './imgs/banner.png';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <div className="banner-container">
          <img src={ Logo } alt="banner" className="img-banner" />
        </div>
        <div className="h1-container">
          <h1 className="h1-form">Adicionar Nova Carta</h1>
        </div>
        <div className="container-input">
          <InputName
            cardName={ cardName }
            onInputChange={ onInputChange }
          />
        </div>

        <div className="container-description">
          <DescriptionInput
            cardDescription={ cardDescription }
            onInputChange={ onInputChange }
          />
        </div>

        <div className="attr-container">
          <Attr1
            cardAttr1={ cardAttr1 }
            onInputChange={ onInputChange }
          />
          <Attr2
            cardAttr2={ cardAttr2 }
            onInputChange={ onInputChange }
          />

          <Attr3
            cardAttr3={ cardAttr3 }
            onInputChange={ onInputChange }
          />
        </div>

        <div className="container-input">
          <InputImage
            cardImage={ cardImage }
            onInputChange={ onInputChange }
          />
        </div>

        <Select
          cardRare={ cardRare }
          onInputChange={ onInputChange }
        />

        {hasTrunfo
          ? <p className="haveTrunfo">Você já tem um Super Trunfo em seu baralho</p>
          : <Checkbox cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />}

        <ButtonSalvar
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
