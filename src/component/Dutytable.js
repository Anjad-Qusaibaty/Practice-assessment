import "./Dutytable.css"


export default function Dutytable(params) {
  return (

  <tr >
    <td className="tabledata">{params.name}</td>
    <td className="tabledata">{params.avail}</td>
  </tr>
  
  )
}