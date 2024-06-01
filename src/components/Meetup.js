import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import img from '../assets/images/Meetup Location Post.jpeg'

function Meetup(){
    return(
        <div className="meetup">
            <hr></hr>
                <div className="row">
                    <img src={img} alt="Meet Up Location" className="meetup-img"></img>
                    <div className="meetup-content">
                        <h2> <FaLocationDot/> &nbsp; &nbsp; Meet-up & Drop-off Information </h2>
                            <p>• Our Meet-up and Drop-off location is on the Corner of 58th Street and 7th Avenue in front of the large old French terra-cotta style building by the small round steps underneath the “Petrossian” caviar sign. </p>
                            <br></br>
                            <p>• (The actual name of the building is the “Alwyn Court” at180 West 58th Street on 7th Avenue but we Do Not meet in the middle of the block on 7th avenue, we meet on the corner of 58th street and 7th avenue)</p>
                            <br></br>
                            <p>• Please arrive on time, we have a tight schedule with tours booked right behind yours and your tour time cannot be extended. Please do not wait by the other pedicabs, they are from other companies and it will cause confusion. Please allow your pedicab driver 5 minutes to arrive.</p>
                            <br></br>
                            <p>•Payment: We do not accept any payment in advance from our clients, payment (USD) is due at the end of the tour. Cash is preferred, any other payment requires us to pay fees and charges.</p>
                            <br></br>
                            <p className="smaller-p">For City Tours Only: If you are within 5 minutes of the meetup/drop-off location we are happy to pick you up at your hotel. Please let us know in advance.</p>
                    </div>
                </div>
            <hr></hr>
        </div>
    )
}

export default Meetup;