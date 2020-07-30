import { Route, Redirect } from 'react-router-dom'
import React from 'react'

import MealPlan from './mealPlanContainer/MealPlan'
import Home from './homePageContainer/Home'
import Header from './staticComponents/Header'



export default function Proute({ path, component: Component, ...props }) {

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

<div className="App">
    <div className="container">
        <Header date={this.state.date} weather={this.state.weather} />
        <Nav date={this.state.date} />

        <Route exact path="/"
            render={(routerProps) =>
                <Home />}
        />

        <Route exact path="/all-meals"
            render={(routerProps) =>
                <AllMeals
                    meals={this.state.meals}
                    date={this.state.date}
                />}
        />

        <Route exact path="/meal-plan"
            render={(routerProps) =>
                <MealPlan
                    addToMeals={this.addToMeals}
                    addToTodayMeals={this.addToTodayMeals}
                    todayMeals={this.state.todayMeals}
                    date={this.state.date}
                    tallyCalories={this.tallyCalories}
                    tallyFat={this.tallyFat}
                />}
        />

    </div >
</div>

export default withRouter(App);
