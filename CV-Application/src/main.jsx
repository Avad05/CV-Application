import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PersonalDetails from './components/Personal.jsx'
import QualificationDetails from './components/Qualification.jsx'
import ExperienceDetails from './components/Experience.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalDetails />
    <QualificationDetails />
    <ExperienceDetails />
  </StrictMode>,
)
