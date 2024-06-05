import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Employee_table from './pages/employee_table';
import Salary_table from './pages/salary_table';
import Final_report from './pages/final_report';
import Em_add_emp from './pages/em_add_emp';
import Profile from './pages/profile';
import Emp_edit_InternForm from './pages/emp_edit_InternForm';
import Salary_cal from './pages/salary_cal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/empTable' element={<Employee_table />} />
    <Route path='/salTable' element={<Salary_table />} />
    <Route path='/finReport' element={<Final_report />} />
    <Route path='/addEmp' element={<Em_add_emp />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/emp_edit_internForm' element={<Emp_edit_InternForm />} />
    <Route path='/salary_cal' element={<Salary_cal />} />

  </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
