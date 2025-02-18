import React from "react";
import { NavLink } from "react-bootstrap";

const Footer =()=>{
    return(
        <footer className="footer pt-4">
                <div className="d-flex justify-content-between">
                    <h2 className="mt-2">PortFolio</h2>
                    <div className="links">
                        <div className="icons d-flex justify-content-end">
                            <NavLink target="blank" href="https://www.facebook.com/profile.php?id=100053406365909&locale=ar_AR"><i class="fa-brands fa-facebook-f ms-1 me-1"></i></NavLink>     
                            <NavLink target="blank" href="https://www.linkedin.com/in/ana-youssef-48141b337/"><i class="fa-brands fa-linkedin-in ms-1 me-1"></i></NavLink>
                            <NavLink href=""><i class="fa-brands fa-instagram ms-1 me-1"></i></NavLink> 
                        </div>
                        <p>Copyright 2025 All Rights Reserved .</p>
                    </div>
                </div>
        </footer>
    )
}
export default Footer