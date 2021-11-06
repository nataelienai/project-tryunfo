import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [target.name]: value }, this.validateForm);
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
      isSaveButtonDisabled,
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleInputChange }
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
      </>
    );
  }
}

export default App;
