import React from 'react';
import ContactSearch from './Contact/ContactSearch'
import ContactList from './Contact/ContactList'

function App() {
  
  let contacts = [
	{name: 'Andrew', phone: '096 12 34 567'	},
	{name: 'Barry',  phone: '096 12 34 567'	},
	{name: 'Loly',   phone: '096 12 34 567'	},
	{name: 'Gogi',   phone: '096 12 34 567'	},
	{name: 'Wick',   phone: '096 12 34 567'	},
	{name: 'Toni',   phone: '096 12 34 567'	},
	{name: 'Tomas',  phone: '096 12 34 567'	},
  ]

  return (
    <div className='wrapper'>
	  <h1>Contact's</h1>
	  <ContactSearch/>
	  <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
