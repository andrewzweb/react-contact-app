import React from 'react';
import Context from './context'
import ContactSearch from './Contact/ContactSearch'
import ContactList from './Contact/ContactList'
import AddContact from './Contact/AddContact'

function App() {
  const [contacts, setContacts] = React.useState([
	{'id': 1, name: 'Andrew', phone: '096 12 34 567'},
	{'id': 2, name: 'Barry',  phone: '096 12 34 567'},
	{'id': 3, name: 'Loly',   phone: '096 12 34 567'},
	{'id': 4, name: 'Gogi',   phone: '096 12 34 567'},
	{'id': 5, name: 'Wick',   phone: '096 12 34 567'},
	{'id': 6, name: 'Toni',   phone: '096 12 34 567'},
	{'id': 7, name: 'Tomas',  phone: '096 12 34 567'},
	])

  function removeContact(id){
	setContacts(contacts.filter(contact => contact.id !== id))
  }


  return (
	<Context.Provider value={{ removeContact }}>
	  <div className='wrapper'>
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
		<h1>Contact's</h1>
		<AddContact/>
		<ContactSearch/>
		<ContactList contacts={contacts}/>
	  </div>
	</Context.Provider>
  );
}

export default App;
