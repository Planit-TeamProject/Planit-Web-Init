import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

// LandingPage는 onNavigate(path) 콜백을 받도록 만들어뒀어서,
// 여기서 react-router의 navigate 함수를 그대로 연결해주기만 하면 됨.
function LandingRoute() {
  const navigate = useNavigate();
  return <LandingPage onNavigate={navigate} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingRoute />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
