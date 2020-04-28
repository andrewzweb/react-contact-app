import React from 'react';

const styles = {
  form: {
	display: 'flex', 
	justifyContent: 'center',
	alignItems: 'center',
	padding: '.5rem 1rem',
	borderRadius: '4px',
	marginBottom: '.5rem'
  },
  input: {
	border: 'none', 
	borderBottom: '1px solid #ccc', 
	width: '250px'
  }
}

function ContactSearch() {
  return (
	<form style={styles.form}>
	  <input style={styles.input}/>
	</form>
  );
}

export default ContactSearch;
