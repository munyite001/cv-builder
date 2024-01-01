/* eslint-disable react/prop-types */
export default function Preview(props) {

    const {name, role, phone, address, email} = props.personalInfo;
    const {skills} = props;
    return (
        <div className="preview-container">
            <div className="resume-document">
                    <hr />
                    <div className="resume-intro">
                        <h1 className="user-name">{name || "Your Name"}</h1>
                        <h2 className="use-role">{ role || "Profession"}</h2>
                        <p className="user-phone">{phone || "Phone"}</p>
                        <p className="user-address">{address || "Address"}</p>
                        <p className="user-email">{email || "someone@email.com"}</p>
                    </div>
                    <div className="user-skills">
                        <h2 className="section-intro">Skills</h2>
                        {skills.length > 0 ?
                            <ul>
                                {skills.map((skill, index) => (
                                    <li key={index}>
                                        <p>{skill}</p>
                                    </li>
                                ))}
                            </ul>:
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Sapiente autem ullam optio quisquam velit reprehenderit veritatis voluptatum eos, 
                                repudiandae doloremque?
                            </p>
                        }
                    </div>
                    <div className="user-experience">
                        <h2 className="section-intro">Experience</h2>
                        {
                            (props.experiences.length == 0 &&
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut reiciendis ipsa rem natus quod iure, tenetur iste voluptatum laboriosam inventore?</p>)||
                            (
                                <ol>
                                    {props.experiences.map((exp, index) => {
                                        return (
                                        <li key={index} className="resume-exp-box">
                                            <div className="resume-exp-box-title">
                                                <h3>{exp.company}</h3> - <p>{exp.jobTitle}</p>
                                            </div>
                                            <div className="resume-exp-box-body">
                                                <p>{exp.startDate} - {exp.endDate}</p>
                                                <p>{exp.description}</p>
                                            </div>
                                        </li>
                                        )
                                    })}
                                </ol>
                            )
                        }
                    </div>
                    <div className="user-education">
                        <h2 className="section-intro">Education</h2>
                        {
                            (props.educations.length == 0 &&
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut reiciendis ipsa rem natus quod iure, tenetur iste voluptatum laboriosam inventore?</p>)||
                            (
                                <ol>
                                    {props.educations.map((edu, index) => {
                                        return (
                                        <li key={index} className="resume-exp-box">
                                            <div className="resume-exp-box-title">
                                                <h3>{edu.schoolName}</h3> - <p>{edu.location}</p>
                                            </div>
                                            <div className="resume-exp-box-body">
                                                <p>{edu.startDate} - {edu.endDate}</p>
                                                <p>{edu.description}</p>
                                            </div>
                                        </li>
                                        )
                                    })}
                                </ol>
                            )
                        }
                    </div>
            </div>
        </div>
    )
}