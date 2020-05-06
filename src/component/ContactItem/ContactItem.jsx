import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Context from '../../context'
import Icon from '@material-ui/core/Icon'
import EditContact from '../ContactEdit/ContactEdit'


function ContactItem({contact, index}){
  const { removeContact } = useContext(Context)
  const classes = ['contact-item']

  if (!contact.show){
	  classes.push('hide')
  }

  const [showEdit, setShowEdit] = useState(false)

  return (
	<div className={classes.join(' ')}>
	  <div className='contact-item__data'>
		<span className='name'>{contact.name}</span>
		<span>{contact.phone}</span>
	  </div>

	  <div className='contact-item__actions'>
		<div className='change' onClick={()=>setShowEdit(!showEdit)}><Icon>create</Icon></div>
		<div className='remove' onClick={removeContact.bind(null, contact.id)} ><Icon>delete-forever</Icon></div>
	  </div>
		{showEdit &&  <EditContact contact={contact}/>}
	</div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}


export default ContactItem

