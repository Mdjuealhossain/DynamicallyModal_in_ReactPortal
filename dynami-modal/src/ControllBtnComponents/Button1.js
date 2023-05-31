import React from "react";


const Button1=(props)=>{

    return (
        <div>
        <button className="btn-modal" onClick={()=>props.handlebtn(
            <div>
            <h1>This is Modal1</h1>
                <button className="modal-clse" onClick={()=>props.handleclos()}>Close btn</button>
            </div>
        )}>Open Modal Clicked B1</button>
        </div>
    )
}
export default Button1