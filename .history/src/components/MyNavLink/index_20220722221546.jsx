import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MyNavLink(props) {
    console.log(props);
    return (
        <NavLink activeClassName='active' className="list-group-item" {...props}>{props.children}</NavLink>
    )
}
