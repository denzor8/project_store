import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '../styles/login.css'

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { register, error } = useAuth();

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
            <h2>Register</h2>
            <div className="inputBox">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="Username" required onChange={e => setUsername(e.target.value)} />
            </div>

            <div className="inputBox">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
            </div>

            <a href="#"> Forgot Password</a>
            <button className='loginButton' onClick={() => register(username, password)}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage