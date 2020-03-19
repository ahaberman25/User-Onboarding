import React, { useState } from 'react'
import axios from 'axios'

import Form from './components/Form.component'

function App() {
  const [postState, setPostState] = useState([])

  const createUserHandler = createUser => {
    setPostState([...postState, createUser])
    axios.post('https://reqres.in/api/users', {createUser})
      .then(response => {
        console.log('axios res', response)
      })
  }

  return (
    <div className="App">
      <Form sendUser={createUserHandler}/>
    </div>
  );
}

export default App;
