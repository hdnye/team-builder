import React, { useState } from 'react';

// Set state for form fields //

const Form = props => {
    const [user, setUser] = useState(
        {user: '' });

// Set function to handle form inputs //

      const handleChanges  = event => {
          setUser({name: event.target.value})
         }  

  // f() to handle form changes including new data using synthetic events - see Docs //
    
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(user)
    }
   
    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name
                <input 
                    id='name' 
                    type='text'
                    name='name'
                    onChange={handleChanges}
                    />
            </label>
            <button type='submit'>Add user Member</button>
        </form>
    )

}

export default Form;