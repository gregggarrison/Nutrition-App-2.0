import React from 'react'
import '../mealPlanFolder/NutritionLabel.css'

const PNutritionLabel = props => {

    // let calDV = 2000
    let tFatDV = 65
    let lCarbsDV = 300
    let lCholestDV = 300
    // let lFiberDV = 25

    const totalCal = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.calories
        }, 0)

    const totalFat = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.allFat
        }, 0)

    const totalCalFromFat = totalFat * 9
    const tFat = ((parseFloat(totalFat / tFatDV)) * 100).toFixed(0) + "%"


    const totalCarbs = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.carbohydrates
        }, 0)

    const tCarbs = ((parseFloat(totalCarbs / lCarbsDV)) * 100).toFixed(0) + "%"


    const totalProtein = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.protein
        }, 0)

    const totalCholesterol = props.todayMeals.reduce(
        (prevValue, currentValue) => {
            return prevValue + +currentValue.cholesterol
        }, 0)

    const pChol = ((parseFloat(totalCholesterol / lCholestDV)) * 100).toFixed(0) + "%"

    return (
        <div id="nutritionfacts" className='summary-label'>
            <table width="225" cellSpacing="0" cellPadding="0">
                <tbody>
                    <tr>
                        <td align="center" className="header">Nutrition Facts</td>
                    </tr>
                    <tr id="height-7px">
                        <td bgcolor="#000000"></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="label">Calories <div id="lCalories" className="weight">{totalCal}</div>
                                </div>
                                <div style={{ paddingLeft: "6px" }} id="padding-top-1px-float-right" className="weight">Calories from Fat
                                    <div id="lCaloriesFat" className="weight">{totalCalFromFat}</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="dvlabel">% Daily Value<sup>*</sup></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="label">Total Fat <div id="lTotalFat" className="weight">{totalFat}g</div>
                                </div>
                                <div id="lTotalFatDV" className="dv">{tFat}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="label">Cholesterol <div id="lCholesterol" className="weight">{totalCholesterol}mg</div>
                                </div>
                                <div id="lCholesterolDV" className="dv">{pChol}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="label">Total Carbohydrates <div id="lCarbs" className="weight">{totalCarbs}g
                                </div>
                                </div>
                                <div id="lCarbsDV" className="dv">{tCarbs}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="label">Protein <div id="lProtein" className="weight">{totalProtein}g</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr id="height-7px">
                        <td bgcolor="#000000"></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="line">
                                <div className="labellight">* Based on a regular
                                    <a href="https://www.choosemyplate.gov/resources/MyPlatePlan">2000 calorie diet </a>
                                    <br></br>
                                    <i>Nutritional details are an estimate and should only be used as a guide for approximation.</i>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>



            
        </div>
    )
}

export default PNutritionLabel

