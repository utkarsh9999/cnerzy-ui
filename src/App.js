import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./lib/amplify";
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Loader from './components/Loader';
import DashboardLayout from './components/DashboardLayout';
import OnboardingStart from './components/SignUp/OnboardingStart';
import SignUp from './components/SignUp/SignUp';
import LoginLayout from './Pages/LOGIN/LoginLayout';
import ForgetPasswordLayout from './Pages/LOGIN/ForgetPassword/ForgetPasswordLayout';

import { OnboardingProvider } from './context/OnboardingContext';
import IndustrySelection from './components/SignUp/IndustrySelection';
import TeamMembers from './components/SignUp/TeamMembers';
import EmailVerification from './components/SignUp/EmailVerification';
import OtpProcess from './components/SignUp/OtpProcess';
import VerificationSuccess from './components/SignUp/VerificationSuccess';
import PrivateRoute from './components/PrivateRoute';
  import { Auth } from 'aws-amplify';
function App() {

window.AmplifyAuth = Auth;

  return (
    <OnboardingProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginLayout />} />
          <Route path="/forget-password" element={<ForgetPasswordLayout />} />
          <Route path="/onboarding" element={<OnboardingStart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/industry-selection" element={<IndustrySelection />} />
          <Route path="/team-members" element={<TeamMembers />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/otp-process" element={<OtpProcess />} />
          <Route path="/verification-success" element={<VerificationSuccess />} />
          <Route path="/preloader" element={<Loader />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </OnboardingProvider>
  );
}

export default App;
