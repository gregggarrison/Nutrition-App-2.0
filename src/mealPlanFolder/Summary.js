import React from 'react'
import PNutritionLabel from '../profileFolder/PNutritionLabel'

const Summary = props => {
    return (
        <div className="col-5">
            <PNutritionLabel todayMeals={props.todayMeals} />
        </div>
    )
};

export default Summary  