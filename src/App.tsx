import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AnswerPage } from './pages/AnswerPage';
import { EmailVerificationPage } from './pages/EmailVerification';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';
import { AboutUs } from './pages/AboutUs';
function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:u/:q" element={<AnswerPage />} />
      <Route path= "/emailVerification/:token" element={<EmailVerificationPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
    
    </BrowserRouter>
  
  );
}
export default App;