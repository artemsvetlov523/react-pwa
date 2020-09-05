import React, { Component } from "react";
import './home.css'
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux'

class Home extends Component {

    state = {
        selectedFlight: null
    }

    selectFlight = (flight) => {
        this.setState({
            selectedFlight: flight
        })
    }

    render() {

        const { flights } = this.props
        const { selectedFlight } = this.state


        return (
            <div className="home">
                <div className="header">
                    <div className="image">
                        <img src="img/home-background.jpg" srcSet="img/home-background.jpg 1000w, img/map-02.jpg 768w, img/map-05.jpg 500w" alt="background"/>
                    </div>
                    <div className="headerCities">
                        <div className="from">
                            <span>{selectedFlight ? selectedFlight.from : null}</span>
                            <br/>
                            <span>{selectedFlight ? selectedFlight.departing : null}</span>
                        </div>
                        <button>
                            Boarding
                        </button>
                        <div className="to">
                            <span>{selectedFlight ? selectedFlight.to : null}</span>
                            <br/>
                            <span>{selectedFlight ? selectedFlight.arriving : null}</span>
                        </div>
                    </div>
                </div>
                <div className="homeContainer">
                    {flights && flights.map((flight, index) => {
                        return (
                            <div onClick={() => this.selectFlight(flight)} key={index} className='flightTicket'>
                                <div className="upTicket">
                                    <div className='upTicketContent'>
                                        <div className="path">
                                            <div className="dot1">
                                                <img src="img/dot.png" alt="dot"/>
                                                <div>{flight.from}</div>
                                                <small>{flight.fromName}</small>
                                                <p>{flight.departing}</p>
                                            </div>
                                            <div className="flightTime">
                                                <small>{flight.flightDuration}</small>
                                                <p>{flight.flightHours}</p>
                                                <p>{flight.flightDate}</p>
                                            </div>
                                            <div className="dot2">
                                                <img src="img/dot.png" alt="dot"/>
                                                <div>{flight.to}</div>
                                                <small>{flight.toName}</small>
                                                <p>{flight.arriving}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bottomTicket'>
                                    <div className='bottomTicketContent'>
                                        <div className="bottomTicketContentContainer">
                                            <div className='flightNumber'>
                                                <small>Flight No</small>
                                                <p>{flight.flightNo}</p>
                                            </div>
                                            <div className='terminal'>
                                                <small>Terminal</small>
                                                <p>{flight.terminal}</p>
                                            </div>
                                            <div className='gate'>
                                                <small>Gate</small>
                                                <p>{flight.gate}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        flights: state.firestore.ordered.flights
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'flights' }
    ])
)(Home)