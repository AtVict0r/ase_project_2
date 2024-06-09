import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
            }}
        > 
            <button 
                onClick={onClose} 
                style={{ position: "absolute", top: 20, right: 20, fontSize: "1.5rem" }}
            >Close</button>            
            {children}
        </div>
    );
};

export default Modal;