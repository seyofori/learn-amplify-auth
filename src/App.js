import React from 'react'
import './App.css'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
// import { withAuthenticator } from 'aws-amplify-react'
import SignUp from './SignUp';

Amplify.configure(awsconfig)

function App() {
  return (
    <div className='App'>
      <SignUp />
    </div>
  )
}

export default App
