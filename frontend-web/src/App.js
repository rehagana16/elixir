import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
