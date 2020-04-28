import React from 'react'

const styles = {
  li: {
	display: 'flex', 
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '.5rem 1rem',
	border: '1px solid #ccc',
	borderRadius: '4px',
	marginBottom: '.5rem'
  },
  span: {
	padding: '0.5rem',
  }
}

function ContactItem({contact, index}){
  return (
	<li style={styles.li}>
	  <span>{contact.name}</span>
	  <span>{contact.phone}</span>

	  <div className="actions">
		<span style={styles.span}>e</span>
		<span style={styles.span}>x</span>
	  </div>
	</li>
  )
}

export default ContactItem
