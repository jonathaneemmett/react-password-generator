import React, { useState, useEffect } from 'react'
import './App.css';
import PasswordGenerator from './PasswordGenerator';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [generatedPassword, setGeneratedPassword] = useState('')

  useEffect(() => {
    console.log('generatedPassword', generatedPassword)
    if (generatedPassword !== '') {
      setPassword(generatedPassword);
      setConfirmPassword(generatedPassword);
    }
  }, [generatedPassword])

  return (
    <div className="container">
      <h1>Sign up</h1>
      <form autoComplete='off'> 
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <PasswordGenerator setGeneratedPassword={setGeneratedPassword} />
        <div className='form-group'>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
