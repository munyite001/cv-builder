import { useState } from "react";
import logo from "../assets/logo.png";

// eslint-disable-next-line react/prop-types
export default function SideBar()
{
    const [toggle, setToggle] = useState(false);
    const [openNavLink, setOpenNavLink] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleOpenNavLink = () => {
        setOpenNavLink(!openNavLink);
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
                        {/* Will add more details later on */}
                    </div>
                </div>

                <i className='bx bx-chevron-right toggle' onClick={handleToggle}></i>
            </header>

            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <li className={openNavLink ? "nav-link open" : "nav-link"}>
                            <a href="#">
                                <div className="details">
                                    <i className='bx bxs-user-plus icon'></i>
                                    <span className="text nav-text">Personal Info</span>
                                    <i className='bx bxs-chevron-down icon-2' onClick={handleOpenNavLink}></i>
                                </div>
                                <ul className="sub-menu">
                                    <li className="sub-menu-link">
                                        <input 
                                            type="text" 
                                            name="name"
                                            placeholder="Full Name"
                                        />
                                    </li>
                                    <li className="sub-menu-link">
                                        <input 
                                            type="text" 
                                            name="phone number"
                                            placeholder="Phone No"
                                        />
                                    </li>
                                    <li className="sub-menu-link">
                                        <input 
                                            type="email" 
                                            name="email"
                                            placeholder="email"
                                        />
                                    </li>
                                    <li className="sub-menu-link">
                                        <input 
                                            type="text" 
                                            name="address"
                                            placeholder="Address"
                                        />
                                    </li>
                                </ul>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}