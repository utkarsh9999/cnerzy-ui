import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';

import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SetNewPassword from './components/SetNewpassword';
import PasswordProcess from './components/PasswordProcess';
import PasswordSuccess from './components/Passwordsuccess';
import Onboarding from './components/Onboarding';

import TeamMembers from './components/TeamMembers';
import IndustrySelection from './components/IndustrySelection';
import SignUp from './components/SignUp';
import EmailVerification from './components/EmailVerification';
import OtpProcess from './components/OtpProcess';
import VerificationSuccess from './components/VerificationSuccess';
import Loader from './components/Loader';
// import Dashboard from './components/Dashboard';
import DashboardLayout from './components/DashboardLayout';
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
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/industrySelection" element={<IndustrySelection/>} />
        <Route path="/teamMembers" element={<TeamMembers/>} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/otp-process" element={<OtpProcess />} />
        <Route path="/verification-success" element={<VerificationSuccess />} />
        <Route path="/preloader" element={<Loader/>} />
        <Route path="/" element={<DashboardLayout/>} />
     

   
      </Routes>
    </Router>
  );
}

export default App;
