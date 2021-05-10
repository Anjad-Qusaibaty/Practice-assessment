import "./Doctorschedule.css"
import Workingtime from "./Workingtime"

export default function Doctorschedule() {
  
  
  
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
    <tr >
      <td className="tabledata">Dr. Who</td>
      <td className="tabledata">On Duty</td>
    </tr>
    </tbody>
  </table>
  </div>

<Workingtime/>

    </div>

  )
}


