import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import CreateContact from './pages/CreateContact.tsx';
import { Toaster } from 'react-hot-toast';
import ListContacts from './pages/ListContacts.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListContacts />} />
        <Route path="/create-contact" element={<CreateContact />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  </StrictMode>,
)
