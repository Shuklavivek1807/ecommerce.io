import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import Header from './components/layout/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AddUser from './components/users/AddUser';
import View from './components/users/Users';
import Product from './components/pages/product';
import Cart from './components/cart/Cart';
import Products from './components/pages/Products';
import Checkout from './components/pages/CheckOut';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/LogIn';
import AdminPage from './components/pages/AdminPage';
import EditUser from './components/users/EditUser';

function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/products' element={<Products/>} />
      <Route exact path='/products/:id' element={<Product/>} />
      <Route exact path='/cart' element={<Cart/>} />
      <Route exact path='/add' element={<AddUser/>} />
      <Route exact path='/view' element={<View/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/checkout' element={<Checkout/>} />
      <Route exact path='/adminpage' element={<AdminPage/>} />
      <Route exact path='/edit' element={<EditUser/>} />
    </Routes>
    </div>
  );
}

export default App;
