import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Staff from './Staff';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enquiry from './Enquiry';
import Followup from './Followup';
import TakeFollowup from './TakeFollowup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} >
      <Route path="Login" element={<Login />} />
      <Route path="Staff" element={<Staff />} />
      <Route path="Enquiry" element={<Enquiry />} />
      <Route path="Followup" element={<Followup />} />
      <Route path="/TakeFollowup/:Id" element={<TakeFollowup />} />

      
      {/* <Route path="*" element={<NoPage />} /> */}
    </Route>

  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
