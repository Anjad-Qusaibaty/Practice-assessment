import "./Home.css";
import {Link} from 'react-router-dom';
import Workingtime from "./Workingtime"


export default function Home() {
  
  
  return (


    <div>
<h1>Welcome to AMS GPS</h1>

<Workingtime/>


<div style={{margin:"20px"}}><span style={{color:"red"}}>Important Note:</span> if you are a new patient, please sign-up before calling.</div>

<div className="actionsection">
<Link  to="/doctorschedule"><button className="actionbuttons">Who is on duty?</button></Link>
<Link  to="/patientsignup"><button className="actionbuttons">I am a new patient</button></Link>
</div>

    </div>
  )
}