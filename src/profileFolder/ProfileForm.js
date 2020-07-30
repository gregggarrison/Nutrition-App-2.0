import React, { Component } from 'react'

import Summary from '../mealPlanFolder/Summary'

class ProfileForm extends Component {

    render() {

        return (

            <div className="row summary">
                <div className="col-7">
                    <form className="profile-form">
                        <div className="form-row">
                            <div class="form-group col-md-3">
                                <label className='form-label'>Username:</label>
                            </div>
                            <div class="form-group col-md-3">
                                <input className='form-input' value={this.props.user.username} name="username" type="text"></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div class="form-group col-md-3">
                                <label className='form-label'>Age:</label>
                            </div>
                            <div class="form-group col-md-3">
                                <input className='form-input' value={this.props.user.age} name="age" type="text"></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div class="form-group col-md-3">
                                <label className='form-label'>Sex:</label>
                            </div>
                            <div class="form-group col-md-3">
                                <input className='form-input' value={this.props.user.sex} name="sex" type="text"></input>
                            </div>
                        </div>



                        <div className="form-row">
                            <div class="form-group col-md-3">

                                <label className='form-label'>Weight (lbs):</label>
                            </div>
                            <div class="form-group col-md-3">
                                <input className='form-input' value={this.props.user.weight} name="weight" type="text"></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div class="form-group col-md-3">
                                <label className='form-label'>Height (ft/in) :</label>
                            </div>
                            <div class="form-group col-md-3">
                                <div className="feet-inch">
                                    <input className='form-input height' name="feet" type="number"></input>
                                    <input className='form-input height' value={this.props.user.height} name="height" type="text"></input>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                                <label class="form-check-label" for="gridCheck">Edit? </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Update</button>

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