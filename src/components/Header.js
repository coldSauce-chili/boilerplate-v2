import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { startLogout } from '../actions/auth'
import { connect } from 'react-redux'
export const Header = ({ startLogout }) => (
    <header className='header'>
        <div className='content-container'>
            <div className='header__content'>


                <Link className='header__title' to="/dashboard" >
                    <h1>Boilerplate</h1>
                </Link>
                <button className='button button--link' onClick={startLogout}>logout</button>
            </div>
        </div>
    </header>


)
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header)