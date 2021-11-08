import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class SavedCards extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      nameToFilterBy: '',
      rarityToFilterBy: '',
    };
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { cards, handleDeleteButtonClick } = this.props;
    const { nameToFilterBy, rarityToFilterBy } = this.state;

    return (
      <div>
        <input
          type="text"
          name="nameToFilterBy"
          value={ nameToFilterBy }
          onChange={ this.handleInputChange }
          data-testid="name-filter"
        />
        <select
          name="rarityToFilterBy"
          value={ rarityToFilterBy }
          onChange={ this.handleInputChange }
          data-testid="rare-filter"
        >
          <option value="">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        {
          cards
            .filter(({ cardName }) => cardName.includes(nameToFilterBy))
            .filter(({ cardRare }) => {
              if (rarityToFilterBy) {
                return cardRare === rarityToFilterBy;
              }
              return true;
            })
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
