import logo from './logo.svg';
import './App.css';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';
import Authentication from './pages/authentication.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import VidioMeetComponent from './pages/VidioMeet.jsx';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path='/:url' element={<VidioMeetComponent/>}/>
        </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
