import React from 'react'
import Summary from './mealPlanFolder/Summary'

const Profile = (props) => {
    console.log('props', props)
    return (
        <div className="container">
            <div className="row summary">
                <div className="col-7">
                    <p>{props.user.username}</p>
                    <p>{props.user.age}</p>
                    <p>{props.user.height}</p>
                    <p>{props.user.weight}</p>
                    <p>{props.user.sex}</p>
                    <p>{props.user.username}</p>

                </div>
            <Summary todayMeals={props.todayMeals} />
            </div>

        </div>
    )
}


export default Profile