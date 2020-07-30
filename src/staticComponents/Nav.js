import React from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Nav(props) {



    return (
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-space-evenly ">
                <Link to='/' onClick={props.filterMealDate} className="p-2 text-muted">Home</Link>
                <Link to='/meal-plan' className="p-2 text-muted" onClick={props.filterMealDate}>Meal Plan</Link>
                <Link to='/all-meals' className="p-2 text-muted" onClick={props.filterMealDate}>All Meals </Link>
                <Link to='/profile' className="p-2 text-muted" onClick={props.filterMealDate}>Profile </Link>

                {/* <Link to='/login' className="p-2 text-muted">Login</Link> */}
            </nav>
        </div>
    )
}

export default Nav