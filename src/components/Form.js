import PropTypes from 'prop-types';
import React from 'react';

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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          Attr01
          <input
            type="number"
            name="attr1"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2">
          Attr02
          <input
            type="number"
            name="attr2"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr3">
          Attr03
          <input
            type="number"
            name="attr3"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            type="text"
            name="image"
            id="image"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select
            name="rarity"
            id="rarity"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          <input
            type="checkbox"
            name="trunfo"
            id="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
          Super Trunfo
        </label>

        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
