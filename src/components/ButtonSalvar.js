import React from 'react';
import PropTypes from 'prop-types';

class ButtonSalvar extends React.Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <button
        data-testid="save-button"
        type="submit"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
        name="isSaveButtonDisabled"
        className="btn-salvar"
      >
        Salvar
      </button>
    );
  }
}

ButtonSalvar.propTypes = {
  isSaveButtonDisabled: PropTypes.bool,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default ButtonSalvar;
