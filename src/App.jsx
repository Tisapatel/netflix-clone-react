import React from 'react';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Player from './pages/Player/Player.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import ProfilePage from './pages/Profile/ProfilePage.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer theme='dark' position="top-right" autoClose={3000} />
      <Routes>
        {/* Login page hamesha accessible */}
        <Route path='/login' element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* Protected routes */}
        <Route 
          path='/' 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path='/player/:id' 
          element={
            <ProtectedRoute>
              <Player />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  )
}

export default App;
