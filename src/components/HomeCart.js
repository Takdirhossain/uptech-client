import React from 'react';

const HomeCart = ({serv}) => {
    return (
        <div>
            <h2>{serv.name}</h2>
            <img src={serv.img} alt="" />
        </div>
    );
};

export default HomeCart;