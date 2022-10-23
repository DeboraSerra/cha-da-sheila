import { Routes, Route } from 'react-router-dom';
import Available from '../pages/Available';
import Home from '../pages/Home';
import NotAvailable from '../pages/NotAvailable';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/available" element={<Available />} />
      <Route path="/not-available" element={<NotAvailable />} />
    </Routes>
  );
};

export default Router;
