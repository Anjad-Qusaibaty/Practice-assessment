
import Workingtime from "./Workingtime"
import axios from "axios";
import { useEffect, useState } from "react";
import Dutytable from "./Dutytable"
import "./Dutytable.css"



export default function Doctorschedule() {
  const [doctorstimetable, set_doctorstimetable] = useState([]);

async function fetchData() {
    
    try{
    const response = await axios.get("http://localhost:4000/doctors");
    

    set_doctorstimetable(response.data);
      
    } catch (error){
        console.log("error test:", error.message);
    }

};

useEffect(()=>{
  fetchData()},[]); 
  
  return (
    <div>
<div>
<h1>Who is on duty?</h1>
</div>
<div className="divtable">

<table style={{padding:"50px"}}>
  <tbody>
  <tr >
    <th className="tableheader">Doctor</th>
    <th className="tableheader">Availability</th>
  </tr>
  
{doctorstimetable.map((doctor)=>
<Dutytable key={doctor.id} name={doctor.doctor} avail={doctor.onDuty? "Available":"Not Available"}/>)}
  
  </tbody>
</table>
</div>


<Workingtime/>

    </div>
    

  )
}


