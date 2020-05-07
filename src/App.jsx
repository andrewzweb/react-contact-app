import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startLoading, stopLoading, getContacts  } from './state/ducks/contacts/actions';

const App = ({contacts, getContacts}) =>{

	useState(()=>{
		getContacts()
	}, [])

	return (
	  <div>
		  {contacts && contacts.map(contact=> 
			<div key={contact.id}>
				Contact #{ contact.id } :
			  <p>{contact.name}</p>
			  <p>{contact.phone}</p>
			</div>
			)}
	  </div>
  )
}

const mapDispatchToProps = ({startLoading, stopLoading, getContacts})

const mapStateToProps = ({contacts})=>({contacts: contacts.contactList})

export default connect(mapStateToProps, mapDispatchToProps)(App)

