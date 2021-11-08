import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class SavedCards extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      nameToFilterBy: '',
    };
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { cards, handleDeleteButtonClick } = this.props;
    const { nameToFilterBy } = this.state;

    return (
      <div>
        <input
          type="text"
          name="nameToFilterBy"
          value={ nameToFilterBy }
          onChange={ this.handleInputChange }
          data-testid="name-filter"
        />
        {
          cards
            .filter(({ cardName }) => cardName.includes(nameToFilterBy))
            .map((card) => (
              <div key={ card.cardName }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  type="button"
                  onClick={ () => handleDeleteButtonClick(card) }
                  data-testid="delete-button"
                >
                  Excluir
                </button>
              </div>
            ))
        }
      </div>
    );
  }
}

SavedCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleDeleteButtonClick: PropTypes.func.isRequired,
};

export default SavedCards;
