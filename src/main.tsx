import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AnswerPage } from './pages/AnswerPage';
import App from './App';
import { EmailVerificationPage } from './pages/EmailVerification';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:u/:q" element={<AnswerPage />} />
        <Route path= "/emailVerification/:token?email=:email" element={<EmailVerificationPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
