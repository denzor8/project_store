import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '../styles/login.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useAuth();

  return (
    <div>
      {/* <h2>Login User</h2> */}
      {error ? (
        <h3>{error}</h3>
      ) : (
        ''
      )}
      <div className='box-body'>
        <div className="box">
          <div className="form">
            <h2>Login</h2>
            <div className="inputBox">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="Username" required onChange={e => setUsername(e.target.value)} />
            </div>

            <div className="inputBox">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
            </div>

            <a href="http://35.239.251.89/" target='_blank'> Forgot Password</a>
            <button className='loginButton' onClick={() => login(username, password)}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage