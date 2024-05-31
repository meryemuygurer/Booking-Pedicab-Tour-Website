import React from "react";
import { FaFileContract} from "react-icons/fa";

function Footer(){
    return(
        <footer>
            <div className="logo_div">
                <span>LOGO</span>
            </div>
            <p className="terms"><FaFileContract/> <span>terms and conditions</span> </p>
            <p className="footer-p"> © Brand Name. All rights reserved.</p>
        </footer>
    )
}

export default Footer;