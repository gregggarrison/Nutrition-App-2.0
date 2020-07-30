import React, { Component } from 'react'
import './Login.css'


export default class Login extends Component {

    state = {
        username: '',
        password: '',
        login: false
    }

    componentDidMount() {
        localStorage.removeItem('token')
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let user = {
            username: this.state.username,
            password: this.state.password
        }

        this.state.login

            ? this.props.login(user)
            : this.props.signUp(user)
    }

    handleClick = (event) => {
        event.preventDefault()
        this.setState({login: !this.state.login})
    }
 
    render() {
        const { username, password, login } = this.state

        return (




            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <form className="box" onSubmit={this.handleSubmit}>

                                {this.state.login
                                    ?
                                    <>
                                        <h1>Log In</h1>
                                        <p className="text-muted"> Please enter your login and password!</p>
                                        <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                                        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                                        <input type="submit" name="" value="Login" href="#" />
                                        <p className="text-muted" onClick={this.handleClick}> Not a member? Click to sign up!</p>


                                    </>
                                    :
                                    <>
                                        <h1>Sign Up</h1>
                                        <p className="text-muted"> Please create your login and password!</p>
                                        <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                                        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                                        <input type="submit" name="" value="Sign Up" href="#" />
                                        <p className="text-muted" onClick={this.handleClick}> Current member? Click to sign in!</p>

                                    </>}


                            </form>
                        </div>
                    </div>
                </div>
            </ div>





        )
    }
}
