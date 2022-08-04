import './App.css'
import { Fragment } from 'react'

// components

import Profile from './components/Profile'
import UserList from './components/UserList'
import React from 'react'

// Context

import UserState from './context/User/UseState'


function App() {

  return (
    <>
      <h1>Hello</h1>
      <UserList />
      <Profile />

    </>
  )
}

export default App
