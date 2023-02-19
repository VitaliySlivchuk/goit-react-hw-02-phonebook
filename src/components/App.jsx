import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import css from './Form/Form.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // fromSubmit = data => {
  //   this.state.contacts.every(contact => {
  //     if (contact.name !== data.name) {
  //       return this.setState(prevState => ({
  //         contacts: [data, ...prevState.contacts],
  //       }));
  //     } else {
  //       return alert(`${data.name} is alredy in contacts`);
  //     }
  //   });
  // };
  fromSubmit = data => {
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
  };

  deleteContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = contacts => {
    const lowCaseFilter = this.state.filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowCaseFilter)
    );
  };

  render() {
    const { fromSubmit, changeFilter, filterContacts, deleteContact } = this;
    const { filter, contacts } = this.state;

    return (
      <div className={css.app}>
        <h1>Phone book</h1>

        <Form getFormState={fromSubmit} />

        <h2>Contacts</h2>
        <div className={css.contactsWrap}>
          <Filter filter={filter} onChangeFilter={changeFilter} />
          <ContactList
            filterContacts={filterContacts}
            contacts={contacts}
            onDelete={deleteContact}
          />
        </div>
      </div>
    );
  }
}
