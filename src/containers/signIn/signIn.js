import React, {Component} from "react";
import './signIn.css'
import {connect} from 'react-redux'
import {signIn, signUp} from "../../store/actions/auth";
import {Redirect} from 'react-router-dom'

class SignIn extends Component{

    state = {
        showRegisterForm: false,
        name: '',
        password: '',
        email: ''
    }

    toggleForm = () => {
        this.setState({
            showRegisterForm: !this.state.showRegisterForm
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSignIn = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }

    handleSignUp = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }

    render() {

        if (this.props.auth.uid) {
            return <Redirect to='/main'/>
        }

        const {showRegisterForm} = this.state
        const {error} = this.props

        return (
            <div className="signIn">
                <div className="login-page">
                    <div className="form">
                        <div className="title">
                            <img src="img/logo_flight-01.png" alt="logo"/>
                            <h3>Flights</h3>
                            <p>Welcome, please sign in or sign up to continue</p>
                        </div>
                        {showRegisterForm ? (
                            <form className="register-form">
                                <input onChange={this.changeInput} id="name" type="text" placeholder="name"/>
                                <input onChange={this.changeInput} id="password" type="password" placeholder="password"/>
                                <input onChange={this.changeInput} id="email" type="text" placeholder="email address"/>
                                <button onClick={this.handleSignUp}>create</button>
                                <p className="message">Already registered? <a onClick={this.toggleForm} href="#">Sign In</a></p>
                            </form>
                        ) : (
                            <form className="login-form">
                                <input onChange={this.changeInput} id="email" type="text" placeholder="email"/>
                                <input onChange={this.changeInput} id="password" type="password" placeholder="password"/>
                                <button onClick={this.handleSignIn}>login</button>
                                {error && <small style={{color: 'red'}}>Login failed</small>}
                                <p className="message">Not registered? <a onClick={this.toggleForm} href="#">Create an account</a></p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        error: state.auth.error,
        auth: state.firebase.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: (info) => dispatch(signIn(info)),
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)