import "./Patientbasicinfo.css"
import {Link} from 'react-router-dom';


export default function Patientbasicinfo(params) {
    const thelink= `/patientdatabase/${params.id}`
  return (
    
    <div className="basicinfo">
        <p>Last Name: {params.lastname}</p>
        <p>ID: {params.id}</p>
        <p>Date of Birth: {params.birthdate}</p>
    <Link to={thelink}><button>Details</button></Link>  
    </div>
   
    
  )
}