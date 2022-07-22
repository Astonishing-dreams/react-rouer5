import React from 'react'
import News from './News'
import Messages from './/Messages'
import { Switch, Route, Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'

export default function Home() {
    return (
        <div>
            <h3>我是Home的内容</h3>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to='/home/news'>News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to='/home/messages'>Message</MyNavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path='/home/news' component={News}></Route>
                    <Route path='/home/messages' component={Messages}></Route>
                    <Redirect to='/home/news'></Redirect>
                </Switch>
            </div>
        </div>
    )
}
