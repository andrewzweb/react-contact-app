import React from 'react'
import ContactItem from './ContactItem'

const styles = {
  ul: {
	listStyle: 'none',
	padding: 0,
	margin: 0
  }
}

function ContactList(props) {
  return (
	<ul style={styles.ul}>
	  {props.contacts.map((contact, index) => {
		return <ContactItem 
				   contact = {contact} 
				   key={contact.id} 
				   index={index}/>
	  })}
	</ul>
  )
}

export default ContactList
