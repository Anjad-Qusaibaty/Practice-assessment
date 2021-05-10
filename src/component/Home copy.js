import "./Home.css";
import {Link} from 'react-router-dom';


export default function Home() {
  

  let status;
  let statusstyle;

  function workinghrs(props) {
    const currentdate = new Date();
    const currenthr= currentdate.getHours();
    if (currenthr<17 && currenthr>8){
      status="Open"
      statusstyle={color:"Green",fontWeight:"bold"}
    } else{
      status="Closed"
      statusstyle={color:"Red",fontWeight:"bold"}
    }
  };
  workinghrs();
  
  
  return (


    <div>
<h1>Welcome to AMS GPS</h1>

<p>We are: <span style={statusstyle}>{status}</span></p>
<p>Working hours are between: <span style={{fontWeight:"bold"}}>9:00-17:00</span> hrs</p>
<div>To make an appointment call the number below during working hours:<br/> <span style={{fontWeight:"bold"}}>020 555 5555</span></div>
<div><span style={{color:"red"}}>Important Note:</span> if you are a new patient, please sign-up before calling</div>
<div className="actionsection">
<Link  to="/doctorschedule"><button className="actionbuttons">Who is on duty?</button></Link>
<Link  to="/patientsignup"><button className="actionbuttons">I am a new patient</button></Link>
</div>
    </div>
  )
}