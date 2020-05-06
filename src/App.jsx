import React, { useState } from 'react';
import Context from './context'
import ContactSearch from './component/ContactSearch/ContactSearch'
import ContactList from './component/ContactList/ContactList'
import AddContact from './component/ContactAdd/ContactAdd'


const App = () =>{
  const [contacts, setContacts] = React.useState([
	{'id': 1, name: 'Andrew', phone: '096 12 34 567', show: true},
	{'id': 2, name: 'Barry',  phone: '096 12 34 567', show: true},
	{'id': 3, name: 'Gogi',   phone: '096 12 34 567', show: true},
	{'id': 4, name: 'Toni',   phone: '096 12 34 567', show: true},
	{'id': 5, name: 'Tomas',  phone: '096 12 34 567', show: true},
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

  const searchContact = (query) =>{
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


  return (
	<Context.Provider value={{ removeContact }}>
	  <div className='wrapper'>
		<h1>Contact's</h1>
		<AddContact onCreate={addContact}/>
		<ContactSearch searchQuery={searchContact}/>
		<ContactList contacts={contacts}/>
	  </div>
	</Context.Provider>
  )
}

export default App


