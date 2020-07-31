import React, { useState, useEffect } from 'react'
import ProfileForm from './ProfileForm'
import PieChart from './PieChart'

const Profile = (props) => {

    // const [calFromFat, setCalFromFat ] = useState(null)
    // const [calFromProt, setCalFromProt] = useState(null)
    // const [calFromCarbs, setCalFromCarbs] = useState(null)


    // const [tCal, setTCal] = useState(0)



    const totalCal = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.calories
        }, 0)

    // useEffect(() => {
    //     setTCal(props.todayMeals.reduce(
    //         (prevValue, currentValue) => {
    //             return prevValue + +currentValue.calories
    //         }, 0))
    // }, [props.todayMeals])

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

    // function getCalFromFat()  {
    //     console.log(totalFat)
    //     console.log(props.todayMeals)
    //     console.log(props)
    //     setCalFromFat(Math.floor(((totalFat * 9)/totalCal * 100)))
    // }

    // useEffect(() => {getCalFromFat()}, [])

    const calFromFat = Math.floor(((totalFat * 9) / totalCal * 100))
    console.log(calFromFat)
    const calFromProt = Math.floor(((totalProtein * 4) / totalCal * 100))
    console.log(calFromProt)
    const calFromCarbs = Math.floor(((totalCarbs * 4) / totalCal * 100))
    console.log(calFromCarbs)

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