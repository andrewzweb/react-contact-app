import React from 'react'

const EditContact =( {contact} )=>{
    const nameChangeHandle = e =>{
        console.log(e.target.value);
        // тут надо будет заюзать хук, но всё это хуйня надо читать про редакс я тебе скину минималистичный проект чисто  на отработку работы с редаксом
        contact.name = e.target.value
    }

    return (
        <div>
            <p>Name:</p>
            <input type="text" value={contact.name} onChange={nameChangeHandle}/>
        </div>

    )
}

export default EditContact;