import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {

  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8080/api/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        })

        const data = await response.json()
        setFirstName(data.first_name)
      }
    )()
  })
  return (
    <Router>
      <Header firstName={firstName} setFirstName={setFirstName} />
      <Routes>
        <Route path='/' element={<HomeScreen firstName={firstName} />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
