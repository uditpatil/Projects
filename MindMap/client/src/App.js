import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstView from './views/FirstView';
import LoginView from './views/LoginView';
import WelcomeView from './views/WelcomeView';
import HelperView from './views/HelperView';
import PatientView from './views/PatientView';
import HomeView from './views/HomeView';
import EditView from './views/EditView';
import ListView from './views/ListView';
import HelperAIView from './views/HelperAIView';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstView />}/>
        <Route path="/mindmap/login" element={<LoginView />}/>
        <Route path="/mindmap/welcome" element={<WelcomeView />}/>
        <Route path="/mindmap/helper" element={<HelperView/>}/>
        <Route path="/mindmap/patient" element={<PatientView />}/>
        <Route path="/mindmap/home" element={<HomeView />}/>
        <Route path="/mindmap/:id/edit" element={<EditView/>}/>
        <Route path="/mindmap/doctorsAndTherapiest" element={<ListView />}/>
        <Route path="/mindmap/helperAI" element={<HelperAIView />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
