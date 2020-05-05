import React from 'react'
import Context from './context'
import ContactSearch from './Contact/ContactSearch'
import ContactList from './Contact/ContactList'
import AddContact from './Contact/AddContact'

function App() {
  const [contacts, setContacts] = React.useState([
	{'id': 1, name: 'Andrew', phone: '096 12 34 567', show: true},
	{'id': 2, name: 'Barry',  phone: '096 12 34 567', show: true},
	{'id': 3, name: 'Gogi',   phone: '096 12 34 567', show: true},
	{'id': 4, name: 'Toni',   phone: '096 12 34 567', show: true},
	{'id': 5, name: 'Tomas',  phone: '096 12 34 567', show: true},
  ])
  
  function removeContact(id){
	setContacts(contacts.filter(contact => contact.id !== id))
  }


  function searchContact(query){
	let re = new RegExp(query , 'gi')
	setContacts(contacts.map(contact => {
	  contact.show = true 
	  if (query === ''){
		contact.show = true
	  } else if (query !== ''){
		if (re.test(contact.name) === true ){
		  contact.show = true
		}else if (re.test(contact.name) !== true){
		  contact.show = false
		}
	  }
	  return contact	
	})
	)
  }

  function addContact(name, phone){
	setContacts(contacts.concat([{
	  id: Date.now(),
	  name: name,
	  phone: phone
	}]))
  }


  return (
	<Context.Provider value={{ removeContact }}>
	<div className='wrapper'>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<h1>Contact's</h1>
	<AddContact onCreate={addContact}/>
	<ContactSearch searchQuery={searchContact}/>
	<ContactList contacts={contacts}/>
	</div>
	</Context.Provider>
  )
}

export default App


