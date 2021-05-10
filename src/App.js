import './App.css';
import Navbar from './component/Navbar'
import {Switch , Route} from 'react-router-dom'
import Home from "./component/Home"
import Patientsignup from './component/Patientsignup'
import Patientdatabase from "./component/Patientdatabase"
import Doctorschedule from "./component/Doctorschedule"
import Patientcard from "./component/Patientcard"



function App() {
  return (
    <div className="App">
      <Navbar/>
        <Switch>
        <Route path="/doctorschedule" component={Doctorschedule} />
        <Route path="/patientdatabase/:id" component={Patientcard}/>
        <Route path="/patientdatabase" component={Patientdatabase} />
        <Route path="/patientsignup" component={Patientsignup} />
        <Route path="/" component={Home} />
        </Switch>

    </div>
  );
}

export default App;
