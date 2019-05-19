import React, {Component} from 'react';

class Flights extends Component {

        render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="light-blue-bg">
                        <div>
                            <div className="container">
                                <div className="row blue">
                                    <input id="flyingfrom" className="flyingfrom third-block" type="text" name="" placeholder="flying from" />
                                    <input id="flyingto" className="flyingto" type="text" name="" placeholder="flying to" />
                                    <input id="departing"  className="departing" type="date" name="" placeholder="departing" />
                                    <input id="returning" className="returning" type="date" name="" placeholder="returning" />
                                    <input id="searchButton" type="button" value="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="new-flight">
                </div>
            </div>
        );
    }
}

export default Flights;