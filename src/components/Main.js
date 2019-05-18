import React, {Component} from 'react';
import pic from '../home_slider.jpg';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <img id="main-pic" src={pic} alt="main-pic"/>
                    </div>
                </div>
                <div className="col-6 black">
                    <div className="container">
                        <div className="row pluspadding">
                            <input id="flyingfrom" className="flyingfrom first-block" type="text" name="" placeholder="flying from" />
                            <input id="flyingto" className="flyingto first-block" type="text" name="" placeholder="flying to" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <input id="departing"  className="departing second-block" type="date" name="" placeholder="departing" />
                            <input id="returning" className="returning second-block" type="date" name="" placeholder="returning" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row minuspadding">
                            <input id="searchButton" className="minuspadding"  type="button" value="Search" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Main;