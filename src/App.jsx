import './App.css';
import { useState } from 'react';
import SideBar from './components/SideBar';
import Preview from './components/Preview';


function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    role: '',
    phone: '',
    address: '',
    email: '',
  })

  const [skills, setSkills] = useState([]);
  
const handleAddSkill = () => {
  setSkills([...skills, ""]);
};

const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
};

const handleSkillChange = (index, event) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = event.target.value;
    setSkills(updatedSkills);
};

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='app'>
      <SideBar 
        personalInfo={personalInfo}
        skills={skills}
        handleChange={handlePersonalInfoChange}
        handleAddSkill={handleAddSkill}
        handleRemoveSkill={handleRemoveSkill}
        handleSkillChange={handleSkillChange}/>
      
      <Preview 
        personalInfo={personalInfo}
        skills={skills}
        />
    </div>
  )
}

export default App
