export default function Workingtime() {

    let status;
    let statusstyle;
  
    function workinghrs() {
      const currentdate = new Date();
      const currenthr= currentdate.getHours();
      if (currenthr<17 && currenthr>=8){
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
        <p>We are: <span style={statusstyle}>{status}</span></p>
        <p>Working hours are between: <span style={{fontWeight:"bold"}}>8:00-17:00</span> hrs</p>
        <div>To make an appointment call the number below during working hours:<br/> <span style={{fontWeight:"bold"}}>020 555 5555</span></div>
    </div>
  )
}