import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '@popperjs/core/dist/umd/popper.min';
import SetNewPassword from './components/SetNewpassword';
import PasswordProcess from './components/PasswordProcess';
import PasswordSuccess from './components/Passwordsuccess';
import Onboarding from './components/Onboarding';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
        <Route path="password-reset" element={<PasswordProcess/>} />
        <Route path='/password-success'element={<PasswordSuccess/>} />
        <Route path="/onboarding" element={<Onboarding/>} />
      </Routes>
    </Router>
  );
}

export default App;
