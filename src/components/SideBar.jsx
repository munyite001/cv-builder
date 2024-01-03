/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "../assets/logo.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function SideBar(props)
{

    const {name, role, phone, address, email} = props.personalInfo;
    const {skills} = props;
    
    const [toggle, setToggle] = useState(false);
    const [openNavLink1, setOpenNavLink1] = useState(false);
    const [openNavLink2, setOpenNavLink2] = useState(false);
    const [openNavLink3, setOpenNavLink3] = useState(false);
    const [openNavLink4, setOpenNavLink4] = useState(false);
    

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

    const downloadPDF = () => {
        const input = document.querySelector('.resume-document');
        html2canvas(input)
        .then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297); //  A4 size: 210mm * 297mm
            pdf.save('resume.pdf');
        })
        .catch((error) => {
            console.log("Error generating pdf: ", error);
        })
    }

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
                                            value={name}
                                            onChange={(e) => props.handleChange(e) }
                                        />
                                    </li>
                                    <li className="sub-menu-link">
                                        <input 
                                            type="text" 
                                            name="phone"
                                            placeholder="Phone No"
                                            className="styled-input"
                                            value={phone}
                                            onChange={(e) => props.handleChange(e) }
                                        />
                                    </li>
                                    <li className="sub-menu-link">
                                        <input 
                                            type="email" 
                                            name="email"
                                            placeholder="email"
                                            className="styled-input"
                                            value={email}
                                            onChange={(e) => props.handleChange(e) }
                                        />
                                    </li>
                                    <li className="sub-menu-link">
                                        <input 
                                            type="text" 
                                            name="address"
                                            placeholder="Address"
                                            className="styled-input"
                                            value={address}
                                            onChange={(e) => props.handleChange(e) }
                                        />
                                    </li>
                                    <li className="sub-menu-link">
                                        <input 
                                            type="text" 
                                            name="role"
                                            placeholder="profession"
                                            className="styled-input"
                                            value={role}
                                            onChange={(e) => props.handleChange(e) }
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
                                                onChange={(e) => props.handleSkillChange(index, e)}
                                                placeholder="Enter a skill"
                                                className="styled-input"
                                            />
                                            <button className="btn" onClick={() => props.handleRemoveSkill(index)}>Remove</button>
                                        </div>
                                    ))}
                                    <button className="btn-2" onClick={props.handleAddSkill}>Add Skill</button>
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
                                    {props.experiences.map((experience, index) => {
                                        return(
                                            <div className="info-box" key={index}>
                                                <div className="info-title">
                                                    <span>{index + 1}</span>
                                                    <p>{experience.jobTitle.slice(0,5)}...</p>
                                                </div>
                                                <div className="control-btns">
                                                    <button className="btn" onClick={() => props.handleRemoveExperience(index) }>Remove</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <button className="btn-2" onClick={() => props.setShowExpModal(true)}>Add</button>
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
                                    {props.educations.map((education, index) => {
                                        return(
                                            <div className="info-box" key={index}>
                                                <div className="info-title">
                                                    <span>{index + 1}</span>
                                                    <p>{education.schoolName.slice(0,5)}...</p>
                                                </div>
                                                <div className="control-btns">
                                                    <button className="btn" onClick={() => props.handleRemoveEducation(index)}>Remove</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <button className="btn-2" onClick={() => props.setShowEduModal(true)}>Add</button>
                                </div>
                            </a>
                        </li>
                        <li className="nav-link download-btn" onClick={downloadPDF}>
                            <a href="#">
                                <div className="details">
                                    <i className='bx bxs-download icon'></i>
                                    <span className="text nav-text">Download</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    {props.showExpModal && (<div className="overlay">
                        <div className="edit-modal">
                            <div className="modal-header">
                                <h3>Add Experience</h3>
                                <i className='bx bx-x' onClick={() => props.setShowExpModal(false)}></i>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="jobTitle">Job Title</label>
                                        <input 
                                            type="text" 
                                            name="jobTitle" 
                                            id="jobTitle" 
                                            className="styled-input"
                                            value={props.experienceFormData.jobTitle}
                                            onChange={props.handleExperienceFormChange} 
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company">Company</label>
                                        <input 
                                            type="text" 
                                            name="company" 
                                            id="company" 
                                            className="styled-input" 
                                            value={props.experienceFormData.company}
                                            onChange={props.handleExperienceFormChange}
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="startDate">Start Date</label>
                                        <input 
                                            type="text" 
                                            name="startDate" 
                                            id="startDate" 
                                            className="styled-input" 
                                            value={props.experienceFormData.startDate}
                                            onChange={props.handleExperienceFormChange}
                                            placeholder="month, year"
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="endDate">End Date</label>
                                        <input 
                                            type="text" 
                                            name="endDate" 
                                            id="endDate" 
                                            className="styled-input" 
                                            value={props.experienceFormData.endDate}
                                            onChange={props.handleExperienceFormChange}
                                            placeholder="month, year"
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea 
                                            name="description" 
                                            id="description" 
                                            className="styled-input" 
                                            value={props.experienceFormData.description}
                                            onChange={props.handleExperienceFormChange}
                                            required>

                                            </textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn-2" onClick={props.handleAddExperience}>Add</button>
                            </div>
                        </div>
                    </div>)}
                    {props.showEduModal && (<div className="overlay">
                        <div className="edit-modal">
                            <div className="modal-header">
                                <h3>Add Education</h3>
                                <i className='bx bx-x' onClick={() => props.setShowEduModal(false)}></i>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="schoolName">School Name</label>
                                        <input 
                                            type="text" 
                                            name="schoolName" 
                                            id="schoolName" 
                                            className="styled-input"
                                            value={props.educationsFormData.schoolName}
                                            onChange={props.handleEducationsFormChange} 
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="location">Location</label>
                                        <input 
                                            type="text" 
                                            name="location" 
                                            id="location" 
                                            className="styled-input" 
                                            value={props.educationsFormData.location}
                                            onChange={props.handleEducationsFormChange}
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="startDate">Start Date</label>
                                        <input 
                                            type="text" 
                                            name="startDate" 
                                            id="startDate"
                                            className="styled-input" 
                                            value={props.educationsFormData.startDate}
                                            onChange={props.handleEducationsFormChange}
                                            placeholder="month, year"
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="endDate">End Date</label>
                                        <input 
                                            type="text" 
                                            name="endDate" 
                                            id="endDate" 
                                            className="styled-input" 
                                            value={props.educationsFormData.endDate}
                                            onChange={props.handleEducationsFormChange}
                                            placeholder="month, year"
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea 
                                            name="description" 
                                            id="description" 
                                            className="styled-input" 
                                            value={props.educationsFormData.description}
                                            onChange={props.handleEducationsFormChange}
                                            required>
                                        </textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn-2" onClick={props.handleAddEducation}>Add</button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </nav>
    )
}