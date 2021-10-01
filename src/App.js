import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Hope from "./test/Hope";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AdminSideNav from "./SideNav/AdminSideNav";
import JourneyReport from "./Reports/JourneyReport";
import AddCredit from "./Payment/AddCredit";


function App() {
  return (
    <div>
      <Router>
    <div className="App">
        <Header/>
        <Route exact path="/AdminSideNav" component={AdminSideNav}/>
        <Route exact path="/JourneyReport" component={JourneyReport}/>
        <Route exact path="/Hope" component={Hope}/>
        <Route exact path="/AddCredit" component={AddCredit}/>
    </div>
        </Router>
        <Footer/>

    </div>
);
}

export default App;
