import Display from './components/Display'
import ExperienceDetails from './components/Experience'
import QualificationDetails from './components/Qualification'
import PersonalDetails from './components/Personal'
import Logo from './components/Logo'
import '../src/styles/display.css'
import '../src/styles/personal.css'
import './App.css'
import { useState } from 'react'


function App() {
  
  const [formData, setFormData] = useState(null);
  const [form1Data, setFormData1] = useState(null);
  const [formData3, setFormData3] = useState(null);

  return (
    <div className='entire'>
      <div>
      <Logo />
      </div>
       <div>
        <PersonalDetails setFormData={setFormData}/>
       <QualificationDetails setFormData1={setFormData1}/> 
       <ExperienceDetails setFormData3={setFormData3}/>  
        
       </div>
       <div>
        <Display formData={formData} form1Data={form1Data} formData3={formData3}/>        
       </div>
      
    </div>
  )
}

export default App
