import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Tables from './Components/table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Components/load';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200); 
  }, []);

  return (
    <Router>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tablesinforamtionlist" element={<Tables />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
