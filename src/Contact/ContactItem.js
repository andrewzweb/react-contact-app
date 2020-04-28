import React from 'react'
import Icon from '@material-ui/core/Icon';

function ContactItem({contact, index}){
  return (
	<div className='contact-item'>
	  <div className='contact-item__data'>
		<span className='name'>{contact.name}</span>
		<span>{contact.phone}</span>
	  </div>

	  <div className='contact-item__actions'>
		<span className='change'><Icon>create</Icon></span>
		<span className='remove'><Icon>delete-forever</Icon></span>
	  </div>
	</div>
  )
}

export default ContactItem

