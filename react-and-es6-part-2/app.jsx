import React from 'react';
import CartItem from './cartItem';

const order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    initialQty: 3,
    price: 8
};

React.render(
    <CartItem item={order}/>,
    document.querySelector('.root')
);
