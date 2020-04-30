import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import Icon from '@material-ui/core/Icon'

function ContactItem({contact, index}){
  const { removeContact } = useContext(Context)

  return (
	<div className='contact-item'>
	  <div className='contact-item__data'>
		<span className='name'>{contact.name}</span>
		<span>{contact.phone}</span>
	  </div>

	  <div className='contact-item__actions'>
		<span className='change'><Icon>create</Icon></span>
		<span className='remove' onClick={removeContact.bind(null, contact.id)} ><Icon>delete-forever</Icon></span>
	  </div>
	</div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}


export default ContactItem

