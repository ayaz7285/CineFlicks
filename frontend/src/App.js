import './App.css';
import Home from './components/Home'
import Search from './components/Search'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import Logout from './components/Logout'
import Profile from './components/Profile'
import Watchlist from './components/Watchlist'
import Register from './components/Register'
import {Routes,Route} from 'react-router-dom'
import Info from './components/Info'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/register" element={<Register/>}></Route> 
        <Route exact path="/logout" element={<Logout/>}></Route> 
        <Route exact path="/profile" element={<Profile/>}></Route> 
        <Route exact path="/watchlist" element={<Watchlist/>}></Route> 
        <Route exact path="/Search/:name" element={<Search/>}></Route> 
        <Route exact path="/info/:id" element={<Info/>}></Route> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
