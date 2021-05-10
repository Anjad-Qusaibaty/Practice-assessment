import {NavLink} from 'react-router-dom';
import './Navbar.css';

const navbarstyle={
    textDecoration: "none",
    color:"white",
    letterSpacing: "0.5px",
    fontSize: "20px",
    verticalAlign:"middle",
    fontWeight: "bold",
    position: "relative",
    margin:"0 10px"
}

export default function Navbar() {
  return (
    <div className="navBar">

<NavLink  exact activeStyle ={{color:"rgb(255, 157, 0)"}} style={navbarstyle} to="/">Home |</NavLink>
<NavLink  activeStyle ={{color:"rgb(255, 157, 0)"}} style={navbarstyle} to="/doctorschedule">Doctor Schedule |</NavLink>
<NavLink  activeStyle ={{color:"rgb(255, 157, 0)"}} style={navbarstyle} to="/patientsignup">Patient Sign-up |</NavLink>
<NavLink  activeStyle ={{color:"rgb(255, 157, 0)"}} style={navbarstyle} to="/patientdatabase">Patient Database |</NavLink>

    </div>
  )
}