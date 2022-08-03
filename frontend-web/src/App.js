import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from 'react-router-dom';
import { useState, useEffect } from 'react'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Registration from './Pages/Registration';
import { UserProvider } from './UserContext';

function App() {

  // useEffect(() => {
  //   (
  //     async () => {
  //       const response = await fetch('http://localhost:8080/api/user', {
  //         headers: { 'Content-Type': 'application/json' },
  //         credentials: 'include',
  //       })

  //       const data = await response.json()
  //       setFirstName(data.first_name)
  //     }
  //   )()
  // })
  return (
    <UserProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/registration' element={< Registration />}></Route>
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
