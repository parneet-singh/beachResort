import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import classes from '../../src/App.css';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';
import SimpleButton from '../Components/styledHero';

const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to = "/rooms" className = 'btn-primary'>
                    our rooms
                </Link>
                </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </>
    )
}
export default Home;
