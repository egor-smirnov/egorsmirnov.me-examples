import React from 'react';

export default class CartItem extends React.Component {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        initialQty: React.PropTypes.number
    };

    static defaultProps = {
        title: 'Undefined Product',
        price: 100,
        initialQty: 0
    };

    state = {
        qty: this.props.initialQty,
        total: 0
    };

    increaseQtyUsingFatArrowFunction = () => this.increaseQty();
    
    constructor(props) {
        super(props);
        this.increaseQtyDefinedInConstructor = this.increaseQty.bind(this);
        this.increaseQtyUsingFatArrowFunctionAndConstructor = () => this.increaseQty();
        this.increaseQtyUsingEs7FunctionBind = ::this.increaseQty;
    }

    componentWillMount() {
        this.recalculateTotal();
    }

    increaseQty() {
        this.setState({qty: this.state.qty + 1}, this.recalculateTotal);
    }

    decreaseQty() {
        let newQty = this.state.qty > 0 ? this.state.qty - 1 : 0;
        this.setState({qty: newQty}, this.recalculateTotal);
    }

    recalculateTotal() {
        this.setState({total: this.state.qty * this.props.price});
    }

    render() {
        return <article className="row large-4">
            <figure className="text-center">
                <p>
                    <img src={this.props.image}/>
                </p>
                <figcaption>
                    <h2>{this.props.title}</h2>
                </figcaption>
            </figure>
            <p className="large-4 column"><strong>Quantity: {this.state.qty}</strong></p>

            <p className="large-4 column">
                <button onClick={this.increaseQty.bind(this)} className="button success">+</button>
                <button onClick={this.decreaseQty.bind(this)} className="button alert">-</button>
            </p>

            <p className="large-4 column"><strong>Price per item:</strong> ${this.props.price}</p>

            <h3 className="large-12 column">
                Buttons
                <div className="row">
                    <button onClick={this.increaseQty} className="button">This won't work</button>
                </div>
                <div className="row">
                    <button onClick={this.increaseQty.bind(this)} className="button">via Function.prototype.bind()</button>
                </div>
                <div className="row">
                    <button onClick={this.increaseQtyDefinedInConstructor} className="button">Using function defined in constructor</button>
                </div>
                <div className="row">
                    <button onClick={this.increaseQtyUsingFatArrowFunctionAndConstructor} className="button">Using fat arrow function and constructor</button>
                </div>
                <div className="row">
                    <button onClick={this.increaseQtyUsingFatArrowFunction} className="button">Using fat arrow function and class properties</button>
                </div>
                <div className="row">
                    <button onClick={this.increaseQtyUsingEs7FunctionBind} className="button">Using Experimental ES7 Function Bind</button>
                </div>
                <div className="row">
                    <button onClick={::this.increaseQty} className="button">Using Experimental ES7 Function Bind directly in JSX</button>
                </div>
            </h3>

            <h3 className="large-12 column text-center">
                Total: ${this.state.total}
            </h3>

        </article>;
    }
}
