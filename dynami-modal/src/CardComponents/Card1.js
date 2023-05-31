import React from "react";

import Card from "./CardChildren/Children";
import Card2 from "./CardChildren/Children2";
import Card3 from "./CardChildren/Children3";

const ControCard=(props)=>{
    
    return(
       
      <div>
         <Card2 />
         <Card />
         <Card3 />
      </div>
    )
}
export default ControCard