import React from "react";
import { FaDollarSign, FaBan, FaCheck, FaMoneyBill, FaFileContract } from "react-icons/fa";

function QuickFacts(){
    return(
        <div className="quick-facts-container">
            <div className="quick-facts-element">
                <FaDollarSign color="#c90005" size={25} />
                <p>All prices listed are for one pedicab per tour, we do not charge by the passenger</p>
            </div>
            <div className="quick-facts-element">
                <FaBan color="#c90005" size={25} />
                <p>By Law each pedicab is only allowed to hold 3 passengers and unfortunately this includes small children. Any more than 3 passengers and we can be fined up to $500.00, have our license revoked and pedicab impounded.</p>
            </div>
            <div className="quick-facts-element">
                <FaCheck color="#c90005" size={25} />
                <p>Please know that we give tours with additional pedicabs all the time and we always ride next to one another so that you, your family and friends will always be together. If you need additional pedicabs please book your tour and let us know how many pedicabs you will need in total.</p>
            </div>
            <div className="quick-facts-element">
                <FaMoneyBill color="#c90005" size={25} />
                <p>We do not accept any payment in advance from our clients, payment (USD) is due at the end of the tour.</p>
            </div>
            
            {/* <div className="quick-facts-element">
                <FaFileContract color="#c90005" size={25} />
                <p>For more information click here: <a href="#">"Terms & Conditions"</a></p>
            </div> */}
            <hr></hr>
        </div>
    )
}

export default QuickFacts;