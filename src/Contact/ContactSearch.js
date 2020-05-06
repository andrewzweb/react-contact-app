import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'

function ContactSearch({searchQuery}) {
	const [ query, setQuery ] = useState('')
	
	const findMe = (e) => {
		setQuery(e.target.value)
		searchQuery(e.target.value)
	} 

	return (
	<form className='search-form'>
	  <Icon className='search-form__icon'>search</Icon>
	  <input className='search-form__input' 
			 value={query} 
			 onChange={findMe}
			 placeholder='Search contact...'/>
	</form>
  )
}

ContactSearch.propTypes = {
  searchQuery: PropTypes.func.isRequired,
}


export default ContactSearch

