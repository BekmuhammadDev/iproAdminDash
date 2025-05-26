import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './layout/Dashboard';
import Order from './pages/order/Order';
import { ADMIN_URL, ADMIN_URLS } from './utils/AdminUrl';
import AddOrder from './pages/order/AddOrder';
import Service from './pages/service/Service';
import Portfolio from './pages/portfolio/Portfolio';
import User from './pages/users/User';
import Careers from './pages/careers/Careers';
import Help from './pages/help/Help';
import AddService from './pages/service/AddService';
import Login from './pages/auth/Login';
import Notfound from './components/Notfound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
    <Route path={ADMIN_URL} element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="order" element={<Order />} />
        <Route path="add-order" element={<AddOrder />}/>
        <Route path='service' element={<Service/>}/>
        <Route path='service/add' element={<AddService/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='user' element={<User/>}/>
        <Route path='careers' element={<Careers/>}/>
        <Route path='help' element={<Help/>}/>
      </Route>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
