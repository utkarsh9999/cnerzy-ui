import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Loader from './components/Loader';
import DashboardLayout from './components/DashboardLayout';
import Onboarding from './Pages/SIGNUP/Onboarding';
import LoginLayout from './Pages/LOGIN/LoginLayout';
import ForgetPasswordLayout from './Pages/LOGIN/ForgetPassword/ForgetPasswordLayout';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginLayout/>} />
        <Route path="/forget-password" element={<ForgetPasswordLayout/>} />
        <Route path="/onboarding" element={<Onboarding/>} />
        <Route path="/preloader" element={<Loader/>} />
        <Route path="/" element={<DashboardLayout/>} />
      </Routes>
    </Router>
  );
}

export default App;
