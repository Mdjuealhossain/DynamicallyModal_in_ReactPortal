import React from "react";



const ModalFooter=({handleclos})=>{
    return (
        <div>
            <button onClick={()=>handleclos()}>Close</button>
        </div>
    )
}
export default ModalFooter