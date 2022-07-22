import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MyNavLink() {
    const { to } = this.props
    return (
        <NavLink activeClassName='active' className="list-group-item" to={to}></NavLink>
    )
}
