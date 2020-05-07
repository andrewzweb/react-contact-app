import React, { useState } from 'react'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'
import { addContactActions } from '../../state/ducks/addcontact/actions'
import { connect } from 'react-redux'

function AddContact({ dispatch }){
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')


  function submitHandler(event){
	event.preventDefault()

    console.log(name, phone)
	if (name.trim()){
	  dispatch(addContactActions(name, phone))
		console.log('run.....')
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

export default connect()(AddContact)













