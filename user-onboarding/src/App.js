import React, { useState } from 'react'
import axios from 'axios'

import Form from './components/Form.component'

import './App.css'

function App() {
  const [postState, setPostState] = useState([])
  const [userList, setUserList] = useState([])

  const createUserHandler = createUser => {
    setPostState([...postState, createUser])
    axios.post('https://reqres.in/api/users', {createUser})
      .then(response => {
        console.log('response', response)
        setUserList([response.data])
      })
      .catch(error => {
        console.log('err msg', error)
      })
  }

  console.log('userlist', userList)

  return (
    <div className="App">
      <Form sendUser={createUserHandler}/>      
      {userList.map(user => {
          return <div>
            <ul>
              <li>ID: {user.id}</li>
              <li>Name: {user.createUser.name}</li>
              <li>Email: {user.createUser.email}</li>
              <li>Role: {user.createUser.role}</li>
              <li>Password: {user.createUser.password}</li>
              <li>Agreed: {user.createUser.tos === true ? 'yes' : 'no'}</li>
            </ul>
          </div>
        })}   
    </div>
  );
}

export default App;
