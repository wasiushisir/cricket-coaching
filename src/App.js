
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Requireauth from './components/Requireauth/Requireauth';
import Header from './Header/Header';
import Home from './Home/Home';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
       
         <Route path='/' element={<Home></Home>}></Route> 
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/check' element={<Requireauth><Checkout></Checkout></Requireauth>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        
        
      </Routes>
      
      
    </div>
  );
}

export default App;
