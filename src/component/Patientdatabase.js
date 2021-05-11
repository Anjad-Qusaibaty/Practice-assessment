import Patientbasicinfo from "./Patientbasicinfo"
import axios from "axios";
import { useEffect, useState } from "react";


export default function Patientdatabase() {
  
  const[fetchedpatients,set_fetchedpatients]=useState([]);
  
  async function fetchData() {
    
    try{
      const response = await axios.get("http://localhost:4000/patients");
      
      
      const sorted_patients_lastname = [...response.data].sort((a,b) => (a.lastName>b.lastName)? 1 : -1);
      
      set_fetchedpatients(sorted_patients_lastname);

    
      
    } catch (error){
      console.log("error test:", error.message);
    }
    
  };
  
  useEffect(()=>{
    fetchData()},[]);  
    
    const[filter,set_filter]=useState("All Patients")
    
    const change_filtering = (event) => {
   
      set_filter(event.target.value);
      
    };
    const patientsofCoventry= fetchedpatients.filter((patient)=> patient.doctorId===1); 
    const patientsofAdenet= fetchedpatients.filter((patient)=> patient.doctorId===2);
    const patientsofTollady= fetchedpatients.filter((patient)=> patient.doctorId===3);
    
    let datatodisplay;

  if (filter === "All Patients"){
    datatodisplay=fetchedpatients;
  } else if (filter === "Dr. Coventry"){
    datatodisplay=patientsofCoventry;
  } else if (filter === "Dr. Adenet"){
    datatodisplay=patientsofAdenet;
  } else if (filter === "Dr. Tollady"){
    datatodisplay=patientsofTollady;
  }

    
    
    return (
      
      <div>
          
          <h1>Patient Database</h1>
          
          <div>
            <p style={{color:"Grey",fontWeight:"bold"}}>Filter patients:</p>
            <select onChange={change_filtering} value={filter}>
            <option value="All Patients">All Patients</option>
            <option value="Dr. Coventry">Dr. Coventry</option>
            <option value="Dr. Adenet" >Dr. Adenet</option>
            <option value="Dr. Tollady" >Dr. Tollady</option>

            </select>
          </div>

          {datatodisplay.map((patient)=>
          <Patientbasicinfo 
          key={patient.id} 
          lastname={patient.lastName} 
          id={patient.id} 
          birthdate={patient.id}/>
          )}
    </div>
  )
}