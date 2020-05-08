import React, { useState } from 'react'
import { addContact } from '../state/ducks/contacts/actions'
import { connect } from 'react-redux'

const AddContact = ({addContact}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    return(
        <div className='contact-add'>
            <label>Add contact</label>
            <input type="text" 
				   name='name' 
				   onChange={e=>setName(e.target.value)} 
			        placeholder='Name'/>
            <input type="text" 
				   name='phone' 
				   onChange={e=>setPhone(e.target.value)} 
			       placeholder='Phone number'/>
            <button type="button" onClick={()=>addContact({name,phone})}>Add contact</button>
        </div>
    )
}

const mapDispatchToProps = ({addContact})

export default connect(null, mapDispatchToProps)(AddContact)
