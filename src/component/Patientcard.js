import axios from "axios";
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import "./Patientbasicinfo.css"



export default function Patientcard() {

  const[patientdata, set_patientdata]=useState([{status:"initial status"}]);
  
  const route_parameters = useParams();
    
    
    useEffect(() => {
      async function fetchData() {
    
        try{
          const response = await axios.get(`http://localhost:4000/patients/${route_parameters.id}`);      
          
          // console.log(response.data); 
          set_patientdata(response.data);
          
        } catch (error){
          console.log("error test:", error.message);
        }
        
      };
   
    fetchData();
  }, [route_parameters.id]);


    return (
      <div>
  <div className="fullinfo">
        <h1>{`${patientdata[0].firstName} ${patientdata[0].lastName}`}</h1>
        <p>ID: {patientdata[0].id}</p>
        <p>Last Name: {patientdata[0].gender}</p>
        <p>Date of Birth: {patientdata[0].dateOfBirth}</p>
        <p>email: {patientdata[0].email}</p>
        <p>PhoneNumber: {patientdata[0].phoneNumber}</p>
        <p>Prescriptions: {patientdata[0].prescriptions}</p>
        <p>doctorId: {patientdata[0].doctorId}</p> 
    </div>
      </div>
    )
  }