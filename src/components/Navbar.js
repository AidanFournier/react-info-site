import React from "react"
import Logo from "../images/react-icon-small.png"

// export default function Navbar() {
//     return (
//         <nav>
//             <img src={Logo} className="nav-logo" alt="React logo" />
//             <h3>ReactFacts</h3>
//             <h4>React Course - Project 1</h4>
//         </nav>
//     )
// }

export default function Navbar(props) {
    return (
         <nav 
            className={props.darkMode ? "dark": ""}
        >
            <img 
                className="nav--logo_icon"
                src={Logo}
                alt="React logo"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}