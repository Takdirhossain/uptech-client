import React from 'react';
import Banner from '../components/Banner';
import Latest from '../components/Latest';
import ServiceHome from '../components/ServiceHome';
import User from '../components/User';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <User></User>
            <Latest></Latest>
        </div>
    );
};

export default Home;