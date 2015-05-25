import React from 'react';

var HelloWorld = React.createClass({
    render: function() {
        return (
            <h1>Hello from {this.props.phrase}!</h1>
        );
    }
});

export default HelloWorld;