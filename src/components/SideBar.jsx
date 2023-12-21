import { useState } from "react";
import logo from "../assets/logo.png";

// eslint-disable-next-line react/prop-types
export default function SideBar()
{
    const [toggle, setToggle] = useState(false);
    const [openNavLink1, setOpenNavLink1] = useState(false);
    const [openNavLink2, setOpenNavLink2] = useState(false);
    const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);
    const [experiences, setExperiences] = useState([
        {
            jobTitle: "",
            company: "",
            startDate: "",
            endDate: "",
            description: ""
        
        }]);


    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleOpenNavLink1 = () => {
        setOpenNavLink1(!openNavLink1);
    }

    const handleOpenNavLink2 = () => {
        setOpenNavLink2(!openNavLink2);
    }

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

    return(
        <nav className={toggle ? "sidebar close" : "sidebar"}>
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src={logo} alt="CV builder logo" />
                    </span>

                    <div className="text header-text">
                        <span className="name">
                            Resume Builder
                        </span>
                        {/* Will add more details later on */}
                    </div>
                </div>

                <i className='bx bx-chevron-right toggle' onClick={handleToggle}></i>
            </header>

            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <li className={openNavLink1 ? "nav-link open" : "nav-link"}>
                            <a href="#">
                                <div className="details">
                                    <i className='bx bxs-user-plus icon'></i>
                                    <span className="text nav-text">Personal Info</span>
                                    <i className='bx bxs-chevron-down icon-2' onClick={handleOpenNavLink1}></i>
                                </div>
                                <ul className="sub-menu">
                                    <li className="sub-menu-link">
                                        <input 
                                            type="text" 
                                            name="name"
                                            placeholder="Full Name"
                                            className="styled-input"
                                        />
                                    </li>
                                    <li className="sub-menu-link">
                                        <input 
                                            type="text" 
                                            name="phone number"
                                            placeholder="Phone No"
                                            className="styled-input"
                                        />
                                    </li>
                                    <li className="sub-menu-link">
                                        <input 
                                            type="email" 
                                            name="email"
                                            placeholder="email"
                                            className="styled-input"
                                        />
                                    </li>
                                    <li className="sub-menu-link">
                                        <input 
                                            type="text" 
                                            name="address"
                                            placeholder="Address"
                                            className="styled-input"
                                        />
                                    </li>
                                </ul>
                            </a>
                        </li>
                        <li className={openNavLink2 ? "nav-link open" : "nav-link"}>
                            <a href="#">
                                <div className="details">
                                    <i className='bx bxs-briefcase-alt-2 icon'></i>
                                    <span className="text nav-text">Skills</span>
                                    <i className='bx bxs-chevron-down icon-2' onClick={handleOpenNavLink2}></i>
                                </div>
                                <div className="skills-section">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="skill-box">
                                            <input
                                                type="text"
                                                value={skill}
                                                onChange={(e) => handleSkillChange(index, e)}
                                                placeholder="Enter a skill"
                                                className="styled-input"
                                            />
                                            <button onClick={() => handleRemoveSkill(index)}>Remove</button>
                                        </div>
                                    ))}
                                <button className="add-skill" onClick={handleAddSkill}>Add Skill</button>
                            </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}