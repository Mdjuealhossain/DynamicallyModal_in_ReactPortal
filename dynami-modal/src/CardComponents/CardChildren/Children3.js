import React, { useState } from "react";
import Modal from "../../Components/modal";


const Card3 = () => {
    const [show, setShow] = useState(false)

    const handleOpen = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }
    return (
        <div>
            <h1>Card1 Is here</h1>
            <h4>Thanks using context is absolutely new for me. I have one perhaps silly question, in componenet called Catalogue I filter the products and here on Edit of a rpodcut I would like to render a component ProductEdit in this modal how do I call it in axios.get method? – elcarchariasJun 22, 2020 at 8:24</h4>
            <button onClick={handleOpen}>Open Card3</button>
            <Modal isOpen={show} handleClose={handleClose}>
              <h1>Modat 3</h1>
              <h4>Thanks using context is absolutely new for me. I have one perhaps silly question, in componenet called Catalogue</h4>
            </Modal>
        </div>
    )
}
export default Card3