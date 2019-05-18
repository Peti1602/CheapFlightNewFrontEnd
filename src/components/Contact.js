import React, {Component} from 'react';
import Cheapflight from "./Cheapflight";

class Contact extends Component {
    render() {
        return (
            <div className="container col-sm-10 col-md-8 col-lg-6">
                <div className="row">
                    <div className="info default-bg t-algin">
                        <Cheapflight firstname="" lastname="contact"></Cheapflight>
                        <h3>Cheap Flight Zrt</h3>
                        <h4>H-1044 Budapest</h4>
                        <h4>Nagymező u. 44</h4>
                        <h3>E-mail: info@cheapflight.com</h3>
                        <h3>Phone: +36 30 123 45 67</h3>
                        <div>
                            <a href="/">Back to home</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;