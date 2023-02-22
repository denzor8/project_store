import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContextProvider';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { register, error } = useAuth();

  return (
    <div>
      <h2>Register User</h2>
      {error ? (
        <h3>{error}</h3>
      ) : (
        ''
      )}
      <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={() => register(username, password)}>Register</button>
    </div>
  )
}

export default RegistrationPage