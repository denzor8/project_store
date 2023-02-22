import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContextProvider';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useAuth();

  return (
    <div>
      <h2>Login User</h2>
      {error ? (
        <h3>{error}</h3>
      ) : (
        ''
      )}
      <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={() => login(username, password)}>Login</button>
    </div>
  )
}

export default LoginPage