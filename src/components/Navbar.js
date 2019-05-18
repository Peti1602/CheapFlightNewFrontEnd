import React, {Component} from 'react';
import Cheapflight from './Cheapflight';

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark col-12 bg">
                <div class="col-md-6 col-lg-4">
                    <Cheapflight class="t-algin" firstname="cheap" lastname="flight"></Cheapflight>
                </div>
                <div class="col-md-6 col-lg-8 pages">
                    <a href="/">home</a>
                    <a href="/contact">contact</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;