import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactListEl.module.css';

export class ContactListEl extends Component {
  render() {
    const { contact, onRemove } = this.props;
    const { id, name, number } = contact;
    return (
      <li className={css.item}>
        <p className={css.text}>
          {name}: {number}
        </p>
        <button
          type="button"
          onClick={() => onRemove(id)}
          className={css.button}
        >
          Delete
        </button>
      </li>
    );
  }
}

ContactListEl.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,

  onRemove: PropTypes.func.isRequired,
};
