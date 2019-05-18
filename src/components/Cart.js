import React, {Component} from 'react';

class Cart extends Component {

    state={
        bg: document.getElementById("root")
    };
    render() {
        this.state.bg.classList.remove("root");
        return (
            <div>
                <h3>Hello from cart</h3>
            </div>
        );
    }
}

export default Cart;