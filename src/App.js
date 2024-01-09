import React, { useState, useEffect } from 'react'
import { View } from './View';


const getDatafromLS = () => {
  const data = localStorage.getItem('users');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const App = () => {

  const [users, setUsers] = useState(getDatafromLS());
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleAddUserSubmit = (e) => {
    e.preventDefault();

    let user = {
      name,
      lastName,
      age
    }
    setUsers([...users, user]);
    setName('');
    setLastName('');
    setAge('');
  }

  const deleteUser = (age) => {
    const filteredUsers = users.filter((element, index) => {
      return element.age !== age
    })
    setUsers(filteredUsers);
  }

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  return (
    <div className='wrapper'>
      <h1>UserList</h1>
    
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
            onSubmit={handleAddUserSubmit}>
            <label>Name</label>
            <input type="text" className='form-control inputt' required
              onChange={(e) => setName(e.target.value)} value={name}></input>
            <br></br>
            <label>lastName</label>
            <input type="text" className='form-control inputt' required
              onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
            <br></br>
            <label>Age</label>
            <input type="text" className='form-control inputt' required
              onChange={(e) => setAge(e.target.value)} value={age}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              Add
            </button>
          </form>
        </div>

        <div className='view-container'>
          {users.length > 0 && <>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Age</th>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View users={users} deleteUser={deleteUser} />
                </tbody>
              </table>
            </div>
            <button className='btn'
              onClick={() => setUsers([])}>Remove All</button>
          </>}
          {users.length < 1 && <div>No users are added yet</div>}
        </div>
      </div>
    </div>
  )
}

export default App
