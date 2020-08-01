import React from 'react'
import ProfileForm from './ProfileForm'
import PieChart from './PieChart'

const Profile = (props) => {

    const totalCal = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.calories
        }, 0)

    const totalFat = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.allFat
        }, 0)

    const totalCarbs = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.carbohydrates
        }, 0)

    const totalProtein = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.protein
        }, 0)

    const calFromFat = Math.floor(((totalFat * 9) / totalCal * 100))
    const calFromProt = Math.floor(((totalProtein * 4) / totalCal * 100))
    const calFromCarbs = Math.floor(((totalCarbs * 4) / totalCal * 100))

    return (
        <div className="container">
            <div >
                <ProfileForm
                    user={props.user}
                    todayMeals={props.todayMeals}
                    updateUser={props.updateUser}
                />
            </div>

            <div>
                <PieChart
                    todayMeals={props.todayMeals}
                    calFromFat={calFromFat}
                    calFromProt={calFromProt}
                    calFromCarbs={calFromCarbs}
                />
            </div>
        </div>
    )
}

export default Profile