import React from 'react';
import './App.css';
import Card from './components/Card';
import './components/css/Filters.css';
import FilterName from './components/FilterName';
import FilterRare from './components/FilterRare';
import FilterTrunfo from './components/FilterTrunfo';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      allCard: [],
      filterName: '',
      filterRare: 'todas',
      filterTrunfo: false,
      disabled: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox' ? target.checked : target.value);
    this.setState({ [name]: value }, () => this.validateForm());
  };

  validateForm = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    let formIsValid = true;

    const attrMax = 90;
    const attrSunMax = 210;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);

    if (!cardName.length
      || !cardDescription.length
      || !cardImage.length
      || !cardRare.length) {
      formIsValid = false;
    }

    if ((attr1 + attr2 + attr3) > attrSunMax) formIsValid = false;
    if (attr1 > attrMax || attr2 > attrMax || attr3 > attrMax) formIsValid = false;
    if (attr1 < 0 || attr2 < 0 || attr3 < 0) formIsValid = false;

    this.setState({ isSaveButtonDisabled: !formIsValid });
  }

  saveInfo = (event) => {
    event.preventDefault();
    const { state } = this;

    this.setState((prevState) => ({
      allCard: [...prevState.allCard, state],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });

    if (state.cardTrunfo) this.setState(() => ({ hasTrunfo: true }));
  }

  removeCard = ({ target }) => {
    const { lastElementChild } = target.parentElement.firstElementChild;

    this.setState({
      hasTrunfo: (lastElementChild.innerText === 'Super Trunfo' ? false : ''),
    });
    target.parentElement.remove();
  }

  filter = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox' ? target.checked : target.value);
    this.setState({ [name]: value }, () => this.disabledFilter());
  }

  disabledFilter = () => {
    const { filterTrunfo } = this.state;
    this.setState({ disabled: filterTrunfo });
  };

  filter1 = (obj, state) => obj.cardName.includes(state.filterName);

  filter2 = (obj, state) => {
    if (state.filterRare === 'todas') return obj.cardRare.includes('');
    if (state.filterRare === 'raro') return obj.cardRare === 'raro';
    if (state.filterRare === 'muito raro') return obj.cardRare.includes('muito raro');
    return obj.cardRare.includes('normal');
  }

  card(obj, index) {
    const mystyle = {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    };
    return (
      <div
        key={ `${obj.cardName} ${index}` }
        className={ index }
        style={ mystyle }
      >
        <Card
          cardName={ obj.cardName }
          cardDescription={ obj.cardDescription }
          cardAttr1={ obj.cardAttr1 }
          cardAttr2={ obj.cardAttr2 }
          cardAttr3={ obj.cardAttr3 }
          cardImage={ obj.cardImage }
          cardRare={ obj.cardRare }
          cardTrunfo={ obj.cardTrunfo }
        />
        <button
          type="button"
          data-testid="delete-button"
          className="btn-excluir"
          onClick={ this.removeCard }
        >
          Excluir
        </button>
      </div>
    );
  }

  gerateCard(state) {
    const filterNameAndRarity = state.allCard.filter((card) => this.filter1(card, state))
      .filter((card) => this.filter2(card, state));
    const filterTrunfo = state.allCard.filter((card) => card.cardTrunfo === true);
    const selectFilter = (state.filterTrunfo === true
      ? filterTrunfo
      : filterNameAndRarity);
    return (
      selectFilter.map((obj, index) => this.card(obj, index))
    );
  }

  render() {
    const { state, handleChange, saveInfo } = this;
    return (
      <div className="allContain">
        <div className="form-preview">
          <Form
            cardName={ state.cardName }
            cardDescription={ state.cardDescription }
            cardAttr1={ state.cardAttr1 }
            cardAttr2={ state.cardAttr2 }
            cardAttr3={ state.cardAttr3 }
            cardImage={ state.cardImage }
            cardRare={ state.cardRare }
            cardTrunfo={ state.cardTrunfo }
            hasTrunfo={ state.hasTrunfo }
            isSaveButtonDisabled={ state.isSaveButtonDisabled }
            onInputChange={ handleChange }
            onSaveButtonClick={ saveInfo }
          />
          <div className="preview">
            <h1 className="h1-preview">Pré-visualização</h1>
            <Card
              cardName={ state.cardName }
              cardDescription={ state.cardDescription }
              cardAttr1={ state.cardAttr1 }
              cardAttr2={ state.cardAttr2 }
              cardAttr3={ state.cardAttr3 }
              cardImage={ state.cardImage }
              cardRare={ state.cardRare }
              cardTrunfo={ state.cardTrunfo }
            />
          </div>
        </div>
        <div>
          <div className="container-section2">
            <div className="filters-cardList">
              <h1 className="h1-allcard">Todas as cartas</h1>
              <h4 className="h4-filter">Filtros de busca</h4>
              <FilterName
                onInputChange={ this.filter }
                filterName={ state.filterName }
                disabled={ state.disabled }
              />
              <FilterRare
                onInputChange={ this.filter }
                filterRare={ state.filterRare }
                disabled={ state.disabled }
              />
              <FilterTrunfo
                onInputChange={ this.filter }
                filterTrunfo={ state.filterTrunfo }
              />
            </div>
            <div className="baralho">
              {this.gerateCard(state)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
