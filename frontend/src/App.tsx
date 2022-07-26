import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8080/api/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        })

        const data = await response.json()
        console.log(data)
      }
    )()
  })
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
