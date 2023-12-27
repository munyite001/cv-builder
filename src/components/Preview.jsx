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
                    </div>
                    <div className="user-education">
                        <h2 className="section-intro">Education</h2>
                    </div>
            </div>
        </div>
    )
}