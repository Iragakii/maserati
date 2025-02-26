
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './component/MainPage.jsx';
import Best from './component/Best.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 
        <Routes>
                <Route path='/' element={<MainPage></MainPage>}></Route>
                <Route path='/best' element={<Best></Best>}></Route>
                
        </Routes>
   
  </BrowserRouter>,
)
