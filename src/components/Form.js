import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name">
          Nome
          <input type="text" name="name" id="name" data-testid="name-input" />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea name="description" id="description" data-testid="description-input" />
        </label>

        <label htmlFor="attr1">
          Attr01
          <input type="number" name="attr1" id="attr1" data-testid="attr1-input" />
        </label>

        <label htmlFor="attr2">
          Attr02
          <input type="number" name="attr2" id="attr2" data-testid="attr2-input" />
        </label>

        <label htmlFor="attr3">
          Attr03
          <input type="number" name="attr3" id="attr3" data-testid="attr3-input" />
        </label>

        <label htmlFor="image">
          Imagem
          <input type="text" name="image" id="image" data-testid="image-input" />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select name="rarity" id="rarity" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          <input
            type="checkbox"
            name="superTrunfo"
            id="superTrunfo"
            data-testid="trunfo-input"
          />
          Super Trunfo
        </label>

        <button type="button" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
