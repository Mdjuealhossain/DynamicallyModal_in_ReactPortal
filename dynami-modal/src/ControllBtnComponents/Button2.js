import React from "react";


const Button2=({handlebtn,handleclos})=>{
    return (
      <div>
<button className="btn-modal" onClick={()=>handlebtn(
    <div>
        <h1>Modal Two Clicked Button2</h1>
        <p>yutredytyuoyikyriuytujy5r7iryh6rtu6teru64re7545764e68e376y547u546eu64r865r</p>
        <button className="modal-clse" onClick={()=>handleclos()}> X  </button>
    </div>
)}>Open Modal</button>
      </div>
    )
}
export default Button2