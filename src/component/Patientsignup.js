import "./Patientsignup.css"

import { useState } from "react";



export default function Patientsignup() {

  const [firsname,set_firstname]=useState("");
  const [lastname,set_lastname]=useState("");
  const [email,set_email]=useState("");
  const [phonenumber,set_phonenumber]=useState("7");
  const[gender,set_gender]=useState("")
  const [birthdate,set_birthdate]=useState("");
  const [onsubmit,set_onsubmit]=useState(false);
  const [message, setMessage] = useState("")



  

  function submit(event) {
    event.preventDefault()
    set_onsubmit(true)
    console.log("form is submitted",{firsname,lastname,email,phonenumber,gender,birthdate});
    setMessage("Success")
  };

  console.log(onsubmit);
 
  
  return (
  <div> 
      <h1>Patient Sign-up form:</h1>

      <div id="address">
      <form onSubmit={submit}>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
        First Name:<span style={{color:"Red"}}>*</span>
      <input type="text"  placeholder="Your First Name*" required onChange={(event)=>set_firstname(event.target.value)}/>
      </label>
      </div>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
        Last Name:<span style={{color:"Red"}}>*</span>
      <input type="text"  placeholder="Your Last Name" required onChange={(event)=>set_lastname(event.target.value)}/>
      </label>
      </div>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
       Email:<span style={{color:"Red"}}>*</span> 
      <input  type="email" placeholder="Your Email" required onChange={(event)=>set_email(event.target.value)}/>
      </label>
      </div>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
        Phone Number:<span style={{color:"Red"}}>*</span>
      <input  type="text"  placeholder="Your Phone Number" required onChange={(event)=>set_phonenumber(event.target.value)}/>
      </label>
      </div>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
        Gender:<span style={{color:"Red"}}>*</span>
        <select  onChange={(event)=>set_gender(event.target.value)} value={gender}>
                <option value="Male">Male</option>
                <option value="Female" >Female</option>
        </select>
      </label>
      </div>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
        Date of Birth:<span style={{color:"Red"}}>*</span>
      <input  type="date"  onChange={(event)=>set_birthdate(event.target.value)} required/>
      </label>
      </div>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
        Click to submit:
      <input  type="submit" value="Submit Form" onChange={(event)=>set_onsubmit(event.target.value)}/>
      </label>
      </div>

      </form>
      <div>
        <p style={{fontStyle: "italic",color:"Red"}}>* are required fields</p>
      </div>

      </div>
      <h3>{message}</h3>
    
  </div>
  )
}