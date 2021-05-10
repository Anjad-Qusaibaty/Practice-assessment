import "./Patientsignup.css"





export default function Patientsignup() {
  
  
  
  return (
  <div> 
      <h1>Patient Sign-up form:</h1>

      <div id="address">
      <form>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
        First Name:<span style={{color:"Red"}}>*</span>
      <input type="text"  placeholder="Your First Name*" required/>
      </label>
      </div>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
        Last Name:<span style={{color:"Red"}}>*</span>
      <input type="text"  placeholder="Your Last Name" required/>
      </label>
      </div>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
       Email:<span style={{color:"Red"}}>*</span> 
      <input  type="email" placeholder="Your Email" required/>
      </label>
      </div>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
        Phone Number:<span style={{color:"Red"}}>*</span>
      <input  type="text"  placeholder="Your Phone Number" required/>
      </label>
      </div>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
        Gender:<span style={{color:"Red"}}>*</span>
        <select  onChange={(event)=> event.target.value} value={"Male"}>
                <option value="Male">Male</option>
                <option value="Female" >Female</option>
        </select>
      </label>
      </div>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
        Date of Birth:<span style={{color:"Red"}}>*</span>
      <input  type="date"  required/>
      </label>
      </div>

      <div id="input1" style={{marginBottom:"10px"}} className="input">
      <label>
        Click to submit:
      <input  type="submit" value="Submit Form"/>
      </label>
      </div>

      </form>
      <div>
        <p style={{fontStyle: "italic",color:"Red"}}>* are required fields</p>
      </div>

      </div>

    
  </div>
  )
}