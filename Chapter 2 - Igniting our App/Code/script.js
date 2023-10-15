// import React form "react";/
import React from 'react'
import ReactDOM from 'react-dom';

const Heading1 = React.createElement("h1",{
    id:"title1",
    className:"name",
},"Hiii Krishh Here");
const Heading2 = React.createElement("h1",{
    id:"title2",
    style:{
        color:"red"
    },
    className:"react"
},"Starting The React");
const Container = React.createElement("div",{},[Heading1,Heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Container)