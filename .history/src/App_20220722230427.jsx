import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink'

export default function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <MyNavLink to="/a/about">About</MyNavLink>
            <MyNavLink to="/a/home">Home</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Switch>
                <Route path='/a/about' component={About}></Route>
                <Route path='/a/home' component={Home}></Route>
                <Redirect to='/a/about'></Redirect>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
