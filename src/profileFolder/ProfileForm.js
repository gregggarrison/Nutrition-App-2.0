import React, { Component } from 'react'
import Summary from '../mealPlanFolder/Summary'

class ProfileForm extends Component {

    state = {
        user: [
            {
                username: this.props.user.username,
                age: this.props.user.age,
                height: this.props.height,
                weight: this.props.weight,
                sex: this.props.sex
            }
        ],
        isChecked: false
    }

    handleCheck = () => {
        this.setState({ isChecked: !this.state.isChecked })
    }

    handleChange = (event) => {
        let { name, value } = event.target
        console.log({ name, value })
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateUser(this.state)
    }

    setFeet = () => {
        let feet = Math.floor((this.props.user.height) / 12)
        return feet
    }

    setInches = () => {
        let totalFeet = (this.props.user.height) / 12
        let feetOnly = Math.floor(totalFeet) //*** */
        let remainder = totalFeet - feetOnly
        let inches = (remainder * 12).toFixed(0) //*** */
        return inches
    }

    render() {

        return (

            <div className="row summary">
                <div className="col-7">
                    <form className="profile-form" onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label className='form-label'>Username:</label>
                            </div>
                            <div className="form-group col-md-3">
                                <input
                                    className='form-input'
                                    defaultValue={this.props.user.username}
                                    name="username"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label className='form-label'>Age:</label>
                            </div>
                            <div className="form-group col-md-3">
                                <input
                                    className='form-input'
                                    defaultValue={this.props.user.age}
                                    name="age"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label className='form-label'>Sex:</label>
                            </div>
                            <div className="form-group col-md-3">
                                <input
                                    onChange={this.handleChange}
                                    className='form-input'
                                    defaultValue={this.props.user.sex}
                                    name="sex"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label className='form-label'>Weight (lbs):</label>
                            </div>
                            <div className="form-group col-md-3">
                                <input
                                    className='form-input'
                                    defaultValue={this.props.user.weight}
                                    name="weight"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label className='form-label'>Height (ft/in) :</label>
                            </div>
                            <div className="form-group col-md-3">
                                <div className="feet-inch">
                                    <p id='conversion' className='form-p' >{this.setFeet()}' {this.setInches()}"</p>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                    checked={this.state.isChecked}
                                    onChange={this.handleCheck}
                                />
                                <label className="form-check-label" >Edit? </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={this.state.isChecked ? "btn btn-primary" : "btn btn-primary hidden"}>Update
                        </button>
                    </form>
                </div>

                <div className="row summary" >
                    <Summary todayMeals={this.props.todayMeals} />
                </div>
            </div >

        )
    }
}

export default ProfileForm