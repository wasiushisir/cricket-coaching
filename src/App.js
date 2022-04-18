
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import Registration from './components/Registration/Registration';
import Requireauth from './components/Requireauth/Requireauth';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
       
         <Route path='/' element={<Home></Home>}></Route> 
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/check/:checkId' element={<Requireauth><Checkout></Checkout></Requireauth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
        
        
      </Routes>
      <Footer></Footer>
      
      
    </div>
  );
}

export default App;
