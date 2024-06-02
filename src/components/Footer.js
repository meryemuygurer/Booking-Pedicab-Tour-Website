import React, { useState } from "react";
import Modal from 'react-modal';
import { FaFileContract } from "react-icons/fa";

Modal.setAppElement('#root'); // root elementinizi burada belirttiğinizden emin olun

function Footer() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <footer>
            <div className="logo_div">
                <span>LOGO</span>
            </div>
            <p className="terms" onClick={openModal}>
                <FaFileContract /> <span>terms and conditions</span>
            </p>
            <p className="footer-p">© Brand Name. All rights reserved.</p>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Terms and Conditions"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <h2>Terms and Conditions </h2>
                <div>
                    <p><br></br>
                        1) All prices listed are for one pedicab per tour, we do not charge by the passenger.
                        <br></br>
                        <br></br>

                        2) By Law each pedicab is only allowed to hold 3 passengers and unfortunately this includes small children. Any more than 3 passengers and we can be fined up to $500.00 have our license revoked and pedicab impounded.

                        * Please know that we give tours with additional pedicabs all the time and we always ride next to one another so that you, your family and friends will always be together. If you need additional pedicabs please book your tour and let us know how many pedicabs you will need in total. The maximum weight limit for the passenger area is 550 lbs.

                        <br></br>
                        <br></br>
                        3) All tours are listed and booked in US Eastern Standard Time (EST) format. When you book a tour you might see a different start time because of time zone differences. If you would like confirmation about your booking please contact us.
                        <br></br>
                        <br></br>
                        6) When you book a tour please let us know how many people will be in your party and provide a phone number in case we need to call you.
                        <br></br>
                        <br></br>
                        7) If you would like to book a tour but do a start available, please contact us so we can book your tour for you.
                        <br></br>
                        <br></br>
                        8) We will contact you before your tour is scheduled to confirm your appointment, if we do not receive a response we will have to cancel your tour.
                        <br></br>
                        <br></br>
                        Disclaimer: The Tour Operator and their respective employees, agents, representatives, and assigns accept no liability whatsoever for any injury, damage, loss, accident, delay, or any other incident which may occur in the course of a tour. Tour and Ride itinerary may change due to construction, traffic congestion and overcrowded areas. If there is severe weather due to heavy rain, lighting, wind gusts, snow etc. your tour might be canceled but we will always try to reschedule you.
                        <br></br>
                        <br></br>
                        Payment:
                        <br></br>
                        We do not accept any payment in advance from our clients, payment (USD) is due at the end of the tour. Cash is preferred as any other payment requires us to pay fees and charges but we accept Zelle and Apple Pay. Gratuities (tips) are welcomed and appreciated but not expected.
                        <br></br>
                        <br></br>
                        Cancellations:
                        <br></br>
                        1) There are no cancellations fees, but if you are going to cancel your tour please notify us as soon as possible so we can offer you time slot to someone else.
                        <br></br>
                        <br></br>
                        2) If there is severe weather due to heavy rain, lighting, wind gusts, snow etc. your tour might be canceled but we will always try to reschedule you.</p>
                        <br></br>
                </div>
                <button onClick={closeModal} className="close-modal">Close</button>
            </Modal>
        </footer>
    );
}

export default Footer;
