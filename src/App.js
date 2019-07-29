import React from 'react'
import './App.css'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import { withAuthenticator } from 'aws-amplify-react'

Amplify.configure(awsconfig)

function App() {
  return (
    <div className='App'>
      <h1>Successfully signed in!</h1>
    </div>
  )
}

export default withAuthenticator(App, {usernameAttributes:'phone_number', hiddenDefaults:['username',]})
