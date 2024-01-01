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

const [showExpModal, setShowExpModal] = useState(false);
const [showEduModal, setShowEduModal] = useState(false);
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

const [experiences, setExperiences] = useState([{
  jobTitle: "Web Developer",
  company: "ABC",
  startDate: "2023 January",
  endDate: "2023 December",
  description: "Worked as a frontend Developer"
},
]);

const [experienceFormData, setExperienceFormData] = useState({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: ""
});

const handleExperienceFormChange = (event) => {
  const { name, value } = event.target;
  setExperienceFormData({ ...experienceFormData, [name]: value });
};

const handleAddExperience = () => {
  setExperiences([...experiences, experienceFormData]);
  // Clear the form data after adding the experience
  setExperienceFormData({
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      description: ""
  });
  setShowExpModal(false);
}

const handleRemoveExperience = (index) => {
  const updatedExperiences = experiences.filter((exp, i) => i !== index);
  setExperiences(updatedExperiences);
}

const [educations, setEducations] = useState([]);
const [educationsFormData, setEducationsFormData] = useState([
    {
        schoolName: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
    
    }]);


const handleEducationsFormChange = (event) => {
    const { name, value } = event.target;
    setEducationsFormData({ ...educationsFormData, [name]: value });
};

const handleAddEducation = () => {
    setEducations([...educations, educationsFormData]);
    // Clear the form data after adding the education
    setEducationsFormData({
        schoolName: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
    });
    setShowEduModal(false);
}

const handleRemoveEducation = (index) => {
  const updatedEducations = educations.filter((edu, i) => i !== index);
  setEducations(updatedEducations);
}

  return (
    <div className='app'>
      <SideBar 
        personalInfo={personalInfo}
        skills={skills}
        experiences={experiences}
        handleChange={handlePersonalInfoChange}
        handleAddSkill={handleAddSkill}
        handleRemoveSkill={handleRemoveSkill}
        handleSkillChange={handleSkillChange}
        showEduModal={showEduModal}
        setShowEduModal={setShowEduModal}
        setShowExpModal={setShowExpModal}
        showExpModal={showExpModal}
        handleAddExperience={handleAddExperience}
        handleExperienceFormChange={handleExperienceFormChange}
        handleRemoveExperience={handleRemoveExperience}
        educations={educations}
        handleAddEducation={handleAddEducation}
        handleEducationsFormChange={handleEducationsFormChange}
        handleRemoveEducation={handleRemoveEducation}
        educationsFormData={educationsFormData}
        experienceFormData={experienceFormData}
        />
      
      <Preview 
        personalInfo={personalInfo}
        skills={skills}
        experiences={experiences}
        educations={educations}
        />
    </div>
  )
}

export default App
