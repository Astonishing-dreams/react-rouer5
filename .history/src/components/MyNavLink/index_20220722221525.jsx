import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MyNavLink(props) {
    const { to } = props
    return (
        <NavLink activeClassName='active' className="list-group-item" {...props}></NavLink>
    )
}
