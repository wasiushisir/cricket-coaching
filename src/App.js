
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Header from './Header/Header';
import Home from './Home/Home';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
       
         <Route path='/' element={<Home></Home>}></Route> 
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        
        
      </Routes>
      
      
    </div>
  );
}

export default App;
