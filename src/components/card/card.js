import React from "react";

const Card = ({ children }) => {
    return (
        <div style={{
            border: "1px solid rgb(230, 235, 241)",
            borderRadius: "4px",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            padding: "8px"

        }}>
            {children}
        </div>
    );
};

export default Card;
