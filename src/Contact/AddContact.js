import React, { useState } from 'react'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'


function AddContact({onCreate}){
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')


  function submitHandler(event){
	event.preventDefault()

	if (name.trim()){
	  onCreate(name, phone)
	  setName('')
	  setPhone('')
	}
  }

	return(
		<div>
		<div className='add-contact-button'>
		  <Icon>person_add</Icon>
		</div>
		<form className='form-add-contact' onSubmit={submitHandler}>
		  <input value={name} onChange={event => setName(event.target.value)} placeholder="Name"/>
		  <input value={phone} onChange={event => setPhone(event.target.value)}  placeholder="Number"/>
		  <button type='submit'>Create Contact</button>
		</form>
		</div>
  )
}

AddContact.propTypes = {
  onCreate: PropTypes.func.isRequired,
}


export default AddContact 













