import React from 'react';
import Banner from '../components/Banner';
import Latest from '../components/Latest';
import ServiceHome from '../components/ServiceHome';
import Trande from '../components/Trande';
import User from '../components/User';
import useTitle from '../hooks/useTitle';

const Home = () => {
    useTitle("Uptech Home")
    return (
        <div>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <User></User>
            <Latest></Latest>
            <Trande></Trande>
        </div>
    );
};

export default Home;