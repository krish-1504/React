import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComp = ()=>{
    return (
        <h1>This Is Header</h1>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComp/>);