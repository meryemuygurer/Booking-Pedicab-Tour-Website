import React from 'react';
import imgg from '../assets/images/tour-info-img-1.jpg'
import ExpandableText from './ExpandableText';

function TourInformation(){
    const maxLength = 100;
    const fullText1 = "Central Park is absolutely beautiful and this one hour “3 Stop” tour takes you through the very southern end of Central Park (the 1.71 mile lower loop) where the main attractions are. You'll have an amazing time while we tell you about the parks history and take beautiful pictures of you so you don't have to take selfies."
    const fullText2 = `Great for “Home Alone 2” fans and those that want to take two short beautiful strolls into Central Park’s most lovely and iconic areas with extended photo shoots.

    This “5 Stop” tour includes all stops and sights from the “1 hour tour” Plus:
    We stop at The Pond and Gapstow Bridge (where Kevin meets the “Pigeon Lady”) right next to the Plaza Hotel and “Billionaires Row” home to the skinniest skyscraper in the world, the tallest residential building in the world and the most expensive apartment sold in Manhattan.
    
    We also stop in The Mall, the beautiful iconic promenade surrounded by American Elm Trees, Bethesda Arcade which features the stunning tiled ceiling from England’s famous Minton Tile Company and take a short stroll to the forever romantic Bow Bridge.
    
    Tour Stops:
    Gapstow Bridge and The Pond, The Mall and Bethesda Arcade, Bow Bridge, Cherry Hill and Cherry Hill Fountain, and Strawberry Fields.
    
    
    Sights Seen:
    The Plaza Hotel and “Billionaires Row”, Wollman Rink, The Carousel, The Chess & Checker House, The Dairy, the Baltostatue, Bethesda Fountain, Bethesda Terrace, the Mall, the Ramble, the Lake, the Loeb Boat House, Bow Bridge, the Ladies Pavilion, Strawberry Fields, the Dakota building, Sheep Meadow, the NYC Marathon finish line, Tavern on the Green, the "Ghostbusters" building, Heckscher Ballfields (Jessie’s Playground) and Pine Bank Arch Bridge (where Elf has a snowball fight).
    
    Movies Locations For: 
    Home Alone 2, Maid in Manhattan, When Harry Met Sally, Breakfast at Tiffany's, Arthur, the Way We Were, North by Northwest, Limitless, Serendipity, Face Off, Now You See Me, John Wick 2, Enchanted, the Muppets Take Manhattan, Home Alone 2, Friends with Benefits, Made of Honor, 27 Dresses, Spider-Man 3, You've Got Mail, Big Daddy, Borat, Die Hard: With a Vengeance, Sex and the City, Gossip Girl, Doctor Who and the Gilded Age.
    
    * If you have trouble walking or getting in and out of a pedicab please let us know and we will always be by your side to help you.`

    const fullText3 = `You will learn about the sites we see and the areas we stop at while we take lots of pictures of you so you have wonderful memories to look back on.

    Most importantly though, whether you a big kid, little kid, an adult or family,
    We want you all to have fun! 
    If you would like to know more about history, movie locations and celebrities, or if you just want to sit back relax and enjoy... 
    We will always tailor the tour to you.
    
    Each of us have been giving tours in Central Park and New York City for 
    over 17 years and sharing our experience, knowledge and passion for 
    New York City and Central Park is what we love to do!
    
    Native New Yorkers for more than 50 years
    
    
    To see our tour guides and learn more about us click here: "About Us"
    `

    const fullText4 = `New York City is one of the fastest moving cities in the world but it also offers tranquility, charm, diversity and history. A pedicab City Tour is the perfect way to see and experience it all.

    Tour Stops: 
    One World Trade Center, Washington Square Park, the Ghostbusters Firehouse, the Friend’s apartment building, the Sex & the City Carrie Bradshaw apartment, the Bull of Wall Street, Pier 35, Little Italy and Chinatown.
    
    Tour Sights Seen:
    Times Square, Midtown Manhattan, the Garment District, Macy’s, the Empire State Building, Madison Square Garden, The Edge, Chelsea, the Meatpacking Districts, Washington Square Arch, Greenwich Village, Tribeca, Lower Manhattan, St. Paul's Chapel, One World Trade Center (The Freedom Tower), the Oculus, Trinity Church, the Financial District,The Bull of Wall Street, Fearless Girl, the Statue of Liberty, the original Fulton Fish Market, Brooklyn Bridge, Manhattan Bridge, Chinatown, Little Italy, Soho and Noho.
    
    * For City Tours Only: If you are within 5 minutes of the meetup/drop-off location we are happy to pick you up at your hotel. Please let us know in advance.`

    const buton1 = 'click for hide'
    const buton2 = 'click for more info'
    return(
        <>
            <h2 className='tour-information-header'>OUR TOUR DESCRIPTIONS</h2>
            <div className="tour-information-container">
                <div className="tour-information-item">
                    <img src={imgg} alt='abc'></img>
                    <p className='bold'>Central Park • 1 Hour Pedicab Tour (3 Stops)</p>
                    <p>$80.00</p>
                    <ExpandableText text={fullText1} maxLength={maxLength} buton1={buton1} buton2={buton2} />
                </div>
                <div className="tour-information-item">
                    <img src={imgg} alt='abc'></img>
                    <p className='bold'>Central Park • 1.5 Hour Pedicab Tour (5 Stops) </p>
                    <p>$120.00</p>
                    <ExpandableText text={fullText2} maxLength={maxLength} buton1={buton1} buton2={buton2} />
                </div>
            </div>
            <div className="tour-information-container">
                <div className="tour-information-item">
                    <img src={imgg} alt='abc'></img>
                    <p className='bold'>Central Park • 1 Hour Pedicab Tour (3 Stops)</p>
                    <p>$80.00</p>
                    <ExpandableText text={fullText3} maxLength={maxLength} buton1={buton1} buton2={buton2} />
                </div>
                <div className="tour-information-item">
                    <img src={imgg} alt='abc'></img>
                    <p className='bold'>Central Park • 1.5 Hour Pedicab Tour (5 Stops) </p>
                    <p>$120.00</p>
                    <ExpandableText text={fullText4} maxLength={maxLength} buton1={buton1} buton2={buton2} />
                </div>
            </div>
        </>
    )
} 

export default TourInformation;