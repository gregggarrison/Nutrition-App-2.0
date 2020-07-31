import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {

    return (
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-space-evenly ">
                <Link to='/' className="p-2 text-muted">Home</Link>
                <Link to='/meal-plan' className="p-2 text-muted" >Meal Plan</Link>
                <Link to='/all-meals' className="p-2 text-muted"> All Meals </Link>
                <Link to='/profile' className="p-2 text-muted"> Profile </Link>
            </nav>
        </div>
    )
}

export default Nav