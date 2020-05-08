import React, { useState } from 'react';
import { connect } from 'react-redux';
import { delContact, getContacts} from './state/ducks/contacts/actions';
import AddContact from './components/AddContact';
import  './styles.css';



const App = ({contacts, getContacts, delContact}) =>{

	useState(()=>{
		getContacts()
	}, [])

	return (
		<div className='contact-holder'>
		<AddContact />
		<div>
			{contacts && contacts.map((contact, i)=> 
			<div className='contact-item' key={contact.id || i+1}>
              <span className='contact-id'>{ contact.id || i+1 }</span>
			  <p>{contact.name}</p>
              <p>{contact.phone}</p>
            <button type="button" onClick={()=>delContact(contact.id)}>DEL</button>
	        </div>
            )}
		</div>
	  </div>
  )
}


const mapDispatchToProps = ({delContact, getContacts})

const mapStateToProps = ({contacts})=>({contacts: contacts.contactList})

export default connect(mapStateToProps, mapDispatchToProps)(App)

