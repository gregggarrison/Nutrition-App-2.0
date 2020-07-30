import React from 'react'
import ProfileForm from './ProfileForm'

const Profile = (props) => {
    
    return (
        <div className="container">
            <div >
                <ProfileForm
                    user={props.user}
                    todayMeals={props.todayMeals}
                    updateUser={props.updateUser}
                />
            </div>
        </div>
    )
}

export default Profile