import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import NavBar from "./components/navBar";
import Home from "./components/Home";
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <div className="App">
 <Router>
 <NavBar />
  <Routes>
    <Route exact path='/' element={<Login />} > </Route>
    <Route exact path="/home" element={<Home />}> </Route>
    <Route exact path="/detail/:id" element={<Detail />}> </Route>
    
   
    </Routes>
 
 </Router>
    </div>
  );
}

export default App;
