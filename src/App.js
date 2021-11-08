import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import SavedCards from './components/SavedCards';

class App extends React.Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);

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
      cards: [],
    };
  }

  handleInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [target.name]: value }, this.validateForm);
  }

  handleSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((state) => {
      const { cards } = state;

      return {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: state.hasTrunfo || cardTrunfo,
        isSaveButtonDisabled: true,
        cards: [...cards, card],
      };
    });
  }

  handleDeleteButtonClick(cardToBeDeleted) {
    this.setState((state) => ({
      cards: state.cards.filter((card) => card !== cardToBeDeleted),
      hasTrunfo: state.hasTrunfo && !cardToBeDeleted.cardTrunfo,
    }));
  }

  validateForm() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const attrLowerLimit = 0;
    const attrUpperLimit = 90;
    const attrSumLimit = 210;

    if (cardName && cardDescription && cardImage && cardRare
      && cardAttr1 >= attrLowerLimit && cardAttr1 <= attrUpperLimit
      && cardAttr2 >= attrLowerLimit && cardAttr2 <= attrUpperLimit
      && cardAttr3 >= attrLowerLimit && cardAttr3 <= attrUpperLimit
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= attrSumLimit) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

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
      cards,
    } = this.state;

    return (
      <>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleInputChange }
          onSaveButtonClick={ this.handleSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <SavedCards
          cards={ cards }
          handleDeleteButtonClick={ this.handleDeleteButtonClick }
        />
      </>
    );
  }
}

export default App;
