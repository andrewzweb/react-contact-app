import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startLoading, stopLoading, getContacts  } from './state/ducks/contacts/actions';
import AddContact from './components/AddContact';

const App = ({contacts, getContacts}) =>{

	useState(()=>{
		getContacts()
	}, [])

	return (
		<>
		<AddContact />
		<div>
			{contacts && contacts.map((contact, i)=> 
				<div key={contact.id || i+1}>
					Contact #{ contact.id || i+1 } :
				<p>{contact.name}</p>
				<p>{contact.phone}</p>
				</div>
				)}
		</div>
	  </>
  )
}

const mapDispatchToProps = ({startLoading, stopLoading, getContacts})

const mapStateToProps = ({contacts})=>({contacts: contacts.contactList})

export default connect(mapStateToProps, mapDispatchToProps)(App)

