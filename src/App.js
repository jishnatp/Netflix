import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

import{originals,action, horror} from './urls'






function App(){
  return(



    <div className="NavBar">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
       <RowPost url={horror} title='Horror' isSmall /> 
      
    </div>
  );
}
export default App;