import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const location = useLocation();
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
    <main>
    <Outlet/>
    </main>
    </>
  )
}

export default App
