import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './cartItem.jsx!';

const order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    initialQty: 3,
    price: 8
};

ReactDOM.render(
    <CartItem title={order.title} image={order.image} initialQty={order.initialQty} price={order.price}/>,
    document.querySelector('.root')
);
