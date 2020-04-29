import React, { useState } from 'react';
import Context from './context'
import ContactSearch from './Contact/ContactSearch'
import ContactList from './Contact/ContactList'
import AddContact from './Contact/AddContact'

const App = () =>{
  const [contacts, setContacts] = useState([
	{'id': 1, name: 'Andrew', phone: '096 12 34 567'},
	{'id': 2, name: 'Barry',  phone: '096 12 34 567'},
	{'id': 3, name: 'Loly',   phone: '096 12 34 567'},
	{'id': 4, name: 'Gogi',   phone: '096 12 34 567'},
	])

  const removeContact = (id) => {
	setContacts(contacts.filter(contact => contact.id !== id))
  }

  const addContact = (name, phone) => {
	  setContacts(contacts.concat([{
		  id: Date.now(),
		  name: name,
		  phone: phone
	  }]))
  }


  return (
	<Context.Provider value={{ removeContact }}>
	  <div className='wrapper'>
		<h1>Contact's</h1>
		<AddContact onCreate={addContact}/>
		<ContactSearch/>
		<ContactList contacts={contacts}/>
	  </div>
	</Context.Provider>
  );
}

export default App;
