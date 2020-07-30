import React from 'react'
import Summary from '../mealPlanFolder/Summary'
import ProfileForm from './ProfileForm'


const Profile = (props) => {
    console.log('props', props)
    return (
        <div className="container">
            <div >

                <ProfileForm
                    user={props.user}
                    todayMeals={props.todayMeals}
                />

            </div>

        </div>
    )
}


export default Profile