import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PrivateOutlet from './components/PirvateOutlet/PrivateOutlet';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/orders" element={<OrderReview/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/placeorder" element={<PrivateOutlet/>}>   
            <Route path="/placeorder" element={<PlaceOrder/>} />
          </Route>
          <Route path="/shipping" element={<PrivateOutlet/>}>   
            <Route path="/shipping" element={<Shipping/>} />        
          </Route>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
