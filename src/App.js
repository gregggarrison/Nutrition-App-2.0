import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'

import AllMeals from './allMealsFolder/AllMeals'
import Header from './staticComponents/Header';
import Home from './homePageFolder/Home'
import Login from './staticComponents/Login'
import MealPlan from './mealPlanFolder/MealPlan';
import Nav from './staticComponents/Nav';
import Profile from './profileFolder/Profile'

const loginURL = "http://localhost:3000/login"
const profileURL = "http://localhost:3000/profile"
const mealsURL = "http://localhost:3000/meals/"
const usersURL = "http://localhost:3000/users/"

class App extends Component {

  state = {
    meals: [],
    user: {},
    todayMeals: [],
    date: "",
    weather: [],
  }

  componentDidMount() {
    this.getDate()
    this.validateUser()
    this.filterMealDate()
  }

  validateUser = () => {
    const token = localStorage.token
    if (token) {
      fetch(profileURL, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(response => {
          this.setState({
            user: response.user,
            meals: response.meals
          })
        }).then(() => this.filterMealDate())
    }

  }

  login = (user) => {
    fetch(loginURL, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user })
    })
      .then(response => response.json())
      .then(response => {
        if (response.message) {
          this.setState({ alert: response.message })
        }
        else {
          localStorage.setItem('token', response.jwt)
          this.setState({
            user: response.user,
            meals: response.meals
          })
        }
      })
      .then(() => this.filterMealDate())
      .then(() => this.props.history.push('/'))
  }

  signUp = (user) => {
    fetch(usersURL, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(response => response.json())
      .then(response => {
        if (response.errors) {
          this.setState({ alerts: response.errors })
        }
        else {
          localStorage.setItem('token', response.token)
          this.setState({
            user: response.user,
            alerts: ["User successfully created!"],
            meals: response.meals
          })
        }
      })
      // .then(() => this.filterMealDate())
      .then(() => this.props.history.push('/'))
  }




  logOut = () => {
    localStorage.removeItem('token')
  }

  getDate = () => {
    const date = new Date().toDateString()
    this.setState({ date })
  }

  addToMeals = (meal) => {
    console.log(meal)
    this.setState({
      meals: [...this.state.meals, meal]
    })
  }

  addToTodayMeals = (meal) => {
    console.log(meal)
    this.setState({
      todayMeals: [...this.state.todayMeals, meal]
    })
  }

  filterMealDate = () => {
    console.log('filterdatefunciton')
    let currentMeals = this.state.meals.filter(meal => {
      let mealDate = new Date(meal.created_at).toDateString()
      let today = new Date().toDateString()
      return mealDate === today
    })
    console.log('currentMeals', currentMeals)
    this.setState({ todayMeals: currentMeals })
  }

  deleteMeal = (meal) => {
    let newMeals = this.state.meals.filter(badMeal => meal.id !== badMeal.id)
    let newTodayMeals = this.state.todayMeals.filter(badMeal => meal.id !== badMeal.id)
    this.setState({
      meals: newMeals,
      todayMeals: newTodayMeals
    })

    fetch(mealsURL + meal.id, {
      method: "DELETE"
    })
  }

  render() {

    return (

      localStorage.token ?
        <>
          <div className="App">
            <div className="container">
              <Header date={this.state.date} weather={this.state.weather} logOut={this.logOut} />
              <Nav date={this.state.date} filterMealDate={this.filterMealDate} />
              <Route exact path="/" render={(routerProps) => <Home />} />
              <Route exact path="/all-meals" render={(routerProps) => <AllMeals meals={this.state.meals} date={this.state.date} />} />
              <Route exact path="/profile" render={(routerProps) =>
                <Profile
                  todayMeals={this.state.todayMeals}
                  meals={this.state.meals}
                  date={this.state.date}
                  user={this.state.user} />}

              />
              <Route exact path="/meal-plan" render={(routerProps) =>
                <MealPlan
                  addToMeals={this.addToMeals}
                  addToTodayMeals={this.addToTodayMeals}
                  todayMeals={this.state.todayMeals}
                  date={this.state.date}
                  tallyCalories={this.tallyCalories}
                  tallyFat={this.tallyFat}
                  deleteMeal={this.deleteMeal}
                  user={this.state.user}
                />} />
            </div >
          </div>
        </>
        : <Login filterMealDate={this.filterMealDate} login={this.login} signUp={this.signUp} />
    )
  }
}

export default withRouter(App);
