import React, {Component} from 'react';
import Flight from "./Flight";

class Flights extends Component {

    state={
        flights: [["BUD", "MAD", "9:40", "11:40", "Wizzair", "32 Euro"], ["BUD", "MAD", "19:40", "21:40", "Ryanair", "22 Euro"], ["BUD", "MAD", "19:40", "21:40", "Ryanair", "52 Euro"]]
    }

    addflights(){
        let tablerows = [];
        for(let i=0; i<this.state.flights.length; i++){
            let flight = this.state.flights[i];
            let newrow = <tr><Flight cityfrom={flight[0]} cityto={flight[1]} start={flight[2]} arrive={flight[3]} company={flight[4]} price={flight[5]} /></tr>
            tablerows.push(newrow)
        }
        return tablerows;
    }

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
                <div className="container">
                    <div className="row">
                        <table>
                            {this.addflights()}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Flights;