import React from "react";


import Button1 from "../ControllBtnComponents/Button1";



const ModalHeader=()=>{
    return (
  <div>
          <div>
            <h1>React Modal 1</h1>
            <p>what you want. In our case, we want it to run that function only one time when the ModalRoot component is first created. To do this, just make the second argument an empty array as you see above. You can also choose to run the function every time a certain variable changes. To do that you just add whatever variables you want to the array that is passed as the second argument of useEffect. However, we won’t be doing that, we will keep it as an empty array so it is only called once.</p>
          
        </div>
      
  </div>
    )
}


export default ModalHeader