import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactListEl } from '../ContactListEl';
import css from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    const { visibleContacts, onRemove } = this.props;

    return (
      <ul className={css.list}>
        {visibleContacts.map(visibleContact => (
          <ContactListEl
            contact={visibleContact}
            onRemove={onRemove}
            key={visibleContact.id}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onRemove: PropTypes.func.isRequired,
};
