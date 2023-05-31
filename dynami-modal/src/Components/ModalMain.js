import React from "react";



const ModalMain=()=>{
    return (
        <div>
            <p>This way is perfectly fine, but it can get a bit repetitive if you're reusing the modal in many places throughout your app. So instead, I would recommend using the context API.

Define a context object for your modal state, create a provider near the top of your application, then whenever you have a child component that needs to render the modal, you can render a consumer of the modal context. This way you can easily nest your modal deeper in your</p>
        </div>
    )
}
export default ModalMain