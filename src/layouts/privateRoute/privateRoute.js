import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";


class PrivateRoute extends Component {

    render() {

        if (!this.props.auth.uid) {
            return <Redirect to='/'/>
        }

        const ChildComponent = this.props.component
        if (this.props.auth.uid) {

            return (<ChildComponent
                auth={this.props.auth}
            />)
        } else {
            return (<></>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
};


export default connect(mapStateToProps)(PrivateRoute);
