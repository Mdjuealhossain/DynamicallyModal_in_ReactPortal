import React, { useState } from "react";

// import Button1 from "../ControllBtnComponents/Button1";
// import Button2 from "../ControllBtnComponents/Button2";
import ControCard from "../CardComponents/Card1";



const Modal = ({isOpen,handleClose,children}) => {


    return (
            <div>
                {isOpen && (
                    <div className="modal">
                        <div className="overly" onClick={handleClose}></div>

                        <div>
                            <div className="modal-contain">

                                {children}
                                <button onClick={handleClose}>Close</button>
                            </div>
                        </div>

                    </div>
                )}
            </div>
    )
}
export default Modal