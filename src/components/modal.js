import React from "react"


const Modal = (props) => {

    if (!props.show) {
        return null
    }

    return (
        <div className="modal" onClick = {props.onClose}>
            <div className="modal-content" onClick = {e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4>Are you sure about that?</h4>
                </div>
                <div className="modal-buttons">
                    {props.delButton}
                    <button onClick={props.onClose} className="buttonShow">No</button>
                </div>
            </div>
        </div>
    )
}

export default Modal