import React from 'react'
import SearchForm from './SearchForm'

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