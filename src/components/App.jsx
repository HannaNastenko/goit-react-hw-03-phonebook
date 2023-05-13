import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleAddContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleCheckUnique = name => {
    const { contacts } = this.state;

    const isExistContact = contacts.find(contact => contact.name === name);

    return isExistContact;
  };

  handleRemoveContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    const addContact = this.handleAddContact;
    const changeFilter = this.handleChangeFilter;
    const checkUnique = this.handleCheckUnique;
    const removeContact = this.handleRemoveContact;

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} onCheck={checkUnique} />
        <h2>Contacts</h2>
        <Filter value={filter} onFilterChange={changeFilter} />
        <ContactList
          visibleContacts={visibleContacts}
          onRemove={removeContact}
        />
      </div>
    );
  }
}
