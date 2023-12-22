import { useState } from "react";
import logo from "../assets/logo.png";

// eslint-disable-next-line react/prop-types
export default function SideBar()
{
    const [toggle, setToggle] = useState(false);
    const [openNavLink1, setOpenNavLink1] = useState(false);
    const [openNavLink2, setOpenNavLink2] = useState(false);
    const [openNavLink3, setOpenNavLink3] = useState(false);
    const [openNavLink4, setOpenNavLink4] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);
    const [experiences, setExperiences] = useState([
        {
            jobTitle: "Web Developer",
            company: "ABC",
            startDate: "2023 January",
            endDate: "2023 December",
            description: "I worked as a web developer"
        
        },
        {
            jobTitle: "Web Designer",
            company: "Microsoft",
            startDate: "2022 January",
            endDate: "2022 December",
            description: "I worked as a web designer"
        
        }
    ]);

    const [educations, setEducations] = useState([
        {
            schoolName: "Lily Academy",
            location: "Nairobi",
            startDate: "2005 January",
            endDate: "2013 December",
            description: "I attended primary eductaion at lily academy",
        
        }]);


    const handleToggle = () => {
        setToggle(!toggle);
        setOpenNavLink1(false);
        setOpenNavLink2(false);
        setOpenNavLink3(false);
        setOpenNavLink4(false);
    }

    const handleOpenNavLink1 = () => {
        setOpenNavLink1(!openNavLink1);
    }

    const handleOpenNavLink2 = () => {
        setOpenNavLink2(!openNavLink2);
    }

    const handleOpenNavLink3 = () => {
        setOpenNavLink3(!openNavLink3);
    }

    const handleOpenNavLink4 = () => {
        setOpenNavLink4(!openNavLink4);
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
                                            <button className="btn" onClick={() => handleRemoveSkill(index)}>Remove</button>
                                        </div>
                                    ))}
                                    <button className="btn-2" onClick={handleAddSkill}>Add Skill</button>
                            </div>
                            </a>
                        </li>
                        <li className={openNavLink3 ? "nav-link open" : "nav-link"}>
                            <a href="#">
                                <div className="details">
                                    <i className='bx bxs-time icon'></i>
                                    <span className="text nav-text">Experience</span>
                                    <i className='bx bxs-chevron-down icon-2' onClick={handleOpenNavLink3}></i>
                                </div>
                                <div className="info-section">
                                    {/* Create a modal for adding experiences */}
                                    {experiences.map((experience, index) => {
                                        return(
                                            <div className="info-box" key={index}>
                                                <div className="info-title">
                                                    <span>{index + 1}</span>
                                                    <p>{experience.jobTitle.slice(0,6)}...</p>
                                                </div>
                                                <div className="control-btns">
                                                    <button className="btn">Edit</button>
                                                    <button className="btn">Remove</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </a>
                        </li>
                        <li className={openNavLink4 ? "nav-link open" : "nav-link"}>
                            <a href="#">
                                <div className="details">
                                    <i className='bx bxs-book-reader icon'></i>
                                    <span className="text nav-text">Education</span>
                                    <i className='bx bxs-chevron-down icon-2' onClick={handleOpenNavLink4}></i>
                                </div>
                                <div className="info-section">
                                    {/* Create a modal for adding education */}
                                    {educations.map((education, index) => {
                                        return(
                                            <div className="info-box" key={index}>
                                                <div className="info-title">
                                                    <span>{index + 1}</span>
                                                    <p>{education.schoolName.slice(0,6)}...</p>
                                                </div>
                                                <div className="control-btns">
                                                    <button className="btn">Edit</button>
                                                    <button className="btn">Remove</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </a>
                        </li>
                    </ul>
                    {showEditModal && (<div className="overlay">
                        <div className="edit-modal"></div>
                    </div>)}
                </div>
            </div>
        </nav>
    )
}