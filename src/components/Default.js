import React, {Component} from 'react';
import Cheapflight from './Cheapflight';

class Default extends Component {
    render() {
        return (
            <div className="container col-sm-10 col-md-8 col-lg-6">
                <div className="row">
                    <div className="info default-bg t-algin">
                        <Cheapflight firstname="" lastname="info"></Cheapflight>
                        <h3>Page not found</h3>
                        <div>
                            <a href="/">Back to home</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;