import logo from './logo.svg';
import AppRoutes from './routes/AppRoutes';
import './App.scss';
import './index.scss';
import { BrowserRouter, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';

function App() {
  const location = useLocation(); 
  const { pathname } = location;
  const [currPath, setCurrPath] = useState('/');

  useEffect(() => {
    setCurrPath(pathname); 
  }, [pathname]); 

  return (
    <div className={currPath === '/' || location.pathname === '/waitlist' ? "app-white" : 'app-blue'}>
      <Header />
      <div className="main-content">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

// Wrap your App component with Router in the main file (e.g., index.js)
const WrappedApp = () => (
  <BrowserRouter basename="/">
    {/* <Router> */}
      <App />
    {/* </Router> */}
  </BrowserRouter>
);

export default WrappedApp;
