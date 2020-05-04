import React, { useState }  from 'react'
import Icon from '@material-ui/core/Icon'

function ContactSearch({searchQuery}) {
	const [ query, setQuery ] = useState('')
	
	function submitHadler(event){
		event.preventDefault()
		if (query.trim()){
			searchQuery(query)
		}
	}

	return (
	<form className='search-form' onSubmit={submitHadler}>
	  <Icon className='search-form__icon'>search</Icon>
	  <input className='search-form__input' value={query} onChange={event => setQuery(event.target.value)}/>
	  <button className='search-form__button'>search</button>
	</form>
  )
}

export default ContactSearch

