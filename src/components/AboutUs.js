import React from "react";
import img1 from '../assets/images/our-story.jpg'
import img2 from '../assets/images/our-story-2.jpg'
import img3 from '../assets/images/our-story-3.jpeg'

function AboutUs(){
    return(
        <div className="about-us">
            <h2>About Us</h2>
            <div className="our-story">
                <div className="row-x">
                    <hr className="left-hr"></hr>
                    <div className="image-container">
                        <img src={img1} className="our-story-img" alt="Our Story"></img>
                        <div className="overlay-text">
                            <p>During the Pandemic almost all of the native New York pedicab tour guides left the business.
                                <br></br>
                                <br></br>
                                In 2022, Night (our founder) decided to bring together some of the last remaining native New York pedicab tour guides, 
                                each with over 15 years experience and knowledge to provide the best pedicab tour experience possible.
                             </p>
                        </div>
                    </div>
                    <hr className="right-hr"></hr>
                </div>
            </div>
            <div className="why-choose">
                <img src={img2} alt="Why Choose Us ?"></img>
                <p> <h4>Why Choose Us?</h4>
                    <br></br>
                    <br></br>
                    We are not a company. We are just a few tour guides who know Central Park and New York City like the back of our hands working together to make all of our clients happy during their visit to the Big Apple.
                    <br></br>
                    <br></br>
                    Our tours are fun and educational whether your a big kid, little kid or an adult and we are right next to you throughout the entire tour to tell you about what you see and take your pictures so you, your family, and friends have wonderful memories to look back on.
                    <br></br>
                    <br></br>
                    95% of New York City pedicab drivers have only recently arrived and know little about the city or Central Park which is why they will just drop passengers off in an area, and just tell them to come back in a couple of minutes. 
                </p>
            </div>
            <div className="meet-guides">
                <img src={img3} alt="Meet Our Guides"></img>
                <p> <h4>Meet Our Guides</h4>
                <br></br>
                <br></br>
                Night (our founder) was born and raised in Istanbul. He learned about New York City when he was just a boy in school and his passion and love for this city was so great that he moved to Manhattan in 2007.
                <br></br>
                <br></br>
                Chris (our manager) was born in New York City in the 60’s. He is a true born and bread native New Yorker and DJ'd in all of the major clubs for 15 years in The City That Never Sleeps.
                <br></br>
                <br></br>
                Garth -Native New Yorker
                <br></br>
                <br></br>
                Moussa (Strong Mind) was born and raised in Senegal. He came to NYC for just a short visit and was so taken with the city that he moved here in 2004.
                <br></br>
                <br></br>
                Benny - Native New Yorker
                </p>
            </div>
        </div>
    )
}

export default AboutUs;