import React from "react";
import "./Footer.css"
export default
function Footer() {
    let d = new Date();
    let year = d.getFullYear(); 
    
    return(
        <div className="footerdiv">
         <p className="copyright">Copyright © {year}</p>
        </div>
    )
}