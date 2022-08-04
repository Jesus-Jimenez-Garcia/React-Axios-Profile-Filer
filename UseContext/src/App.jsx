import './App.css'


// components

import Profile from './components/Profile'
import UserList from './components/UserList'


// Context

import UserState from './context/User/UseState'

import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <UserState>
      <h1>Hello</h1>
      <UserList />
      <Profile />

    </UserState>
  )
}

export default App
