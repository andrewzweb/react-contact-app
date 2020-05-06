import React, { useState }  from 'react'
import Icon from '@material-ui/core/Icon'

function ContactSearch({searchQuery}) {
	const [ query, setQuery ] = useState('')
	
	const findMe = (event) => {
		setQuery(event.target.value)
		searchQuery(event.target.value)
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

