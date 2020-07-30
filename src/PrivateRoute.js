import { Route, Redirect } from 'react-router-dom'
import React from 'react'

import MealPlan from './mealPlanContainer/MealPlan'
export default function PrivateRoute({ path, component: Component, ...props }) {

    console.log(localStorage.token)
    return localStorage.token
        ? <Route exact path={'/meal-plan'} render={(routerProps) =>


            <MealPlan {...props}
                date={props.date}
                addToMeals={props.addToMeals}
                addToTodayMeals={props.addToTodayMeals}
                meals={props.meals}
                filterMealDate={props.ilterMealDate}
                todayMeals={props.todayMeals}
            />} />
        : <Redirect to="/login" />
}