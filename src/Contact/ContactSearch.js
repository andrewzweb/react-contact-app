import React from 'react'
import Icon from '@material-ui/core/Icon'


function ContactSearch() {
  return (
	<form className='search-form'>
	  <Icon className='search-form__icon'>search</Icon>
	  <input className='search-form__input'/>
	  <button className='search-form__button'>search</button>
	</form>
  )
}

export default ContactSearch

