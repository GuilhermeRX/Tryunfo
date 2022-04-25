import React from 'react';
import PropTypes from 'prop-types';
import './css/Card.css';
import { GiSwordSlice, GiSlashedShield, GiMorgueFeet, GiDiamondHard }
from 'react-icons/gi';
import SuperTrunfo from './imgs/supertrunfo.svg';
import bannerCard from './imgs/miniban.png';
import insertIMG from './imgs/insertnew.svg';

class Card extends React.Component {
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
    } = this.props;

    const supertrunfo = (
      <div className="div-trunfo">
        <img src={ SuperTrunfo } alt="Super Trunfo" className="trunfo-img" />
        <p className="p-trunfo" data-testid="trunfo-card"> Super Trunfo </p>
      </div>
    );

    return (
      <div className="card">
        <div className="poke-name">
          <h1 data-testid="name-card">{cardName}</h1>
        </div>

        <div className="div-img">
          <img
            src={ (cardImage || insertIMG) }
            alt={ cardName }
            data-testid="image-card"
            className="img-poke"
          />
        </div>

        <div className="div-description">
          <p
            data-testid="description-card"
            className="description"
          >
            {cardDescription}
          </p>
        </div>

        <div className="div-atributes">
          <div className="atributes">
            <GiSwordSlice className="attr-icon" />
            <p className="textatr">ATTACK</p>
            <p data-testid="attr1-card" className="att">{cardAttr1}</p>
          </div>
          <div className="atributes">
            <GiSlashedShield className="attr-icon" />
            <p className="textatr">DEFENSE</p>
            <p data-testid="attr2-card" className="att">{cardAttr2}</p>
          </div>

          <div className="atributes">
            <GiMorgueFeet className="attr-icon" />
            <p className="textatr">SPEED</p>
            <p data-testid="attr3-card" className="att">{cardAttr3}</p>
          </div>

          <div className="atributes">
            <GiDiamondHard className="attr-icon" />
            <p className="textatr">RARITY</p>
            <p data-testid="rare-card" className="rare-preview att">{cardRare}</p>
          </div>
        </div>

        <div className="last-container">
          <div className="tryunfo-contain">
            {cardTrunfo === true && supertrunfo}
          </div>
          <div className="banner-contain">
            <img src={ bannerCard } alt="bannerCard" className="icon-ban" />
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
