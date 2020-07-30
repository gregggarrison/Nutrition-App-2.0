import { Route, withRouter, Redirect } from 'react-router-dom'

import React from 'react'
import SearchForm from './SearchForm'
import Header from '../staticComponents/Header'
import Nav from '../staticComponents/Nav'
import AllMeals from '../allMealsFolder/AllMeals'
import Summary from './Summary'


function MealPlan(props) {

    return (
        <div className="container">
            <>
                <SearchForm
                    addToMeals={props.addToMeals}
                    addToTodayMeals={props.addToTodayMeals}
                    todayMeals={props.todayMeals}
                    tallyCalories={props.tallyCalories}
                    tallyFat={props.tallyFat}
                    deleteMeal={props.deleteMeal}
                    user={props.user}
                />
            </>

        </div>
    )
}

export default MealPlan