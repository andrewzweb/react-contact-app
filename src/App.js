import React, { useState } from 'react'
import Context from './context'
import ContactSearch from './Contact/ContactSearch'
import ContactList from './Contact/ContactList'
import AddContact from './Contact/AddContact'
import { initialContacts } from './helpers/values'

function App() {
  const [contacts, setContacts] = useState(initialContacts)
  
  function removeContact(id){
	setContacts(contacts.filter(contact => contact.id !== id))
  }


  function searchContact(query){
	(query.length >= 1)
	? setContacts(contacts.filter(el=> el.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) && el )) 
	: setContacts(initialContacts)
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


