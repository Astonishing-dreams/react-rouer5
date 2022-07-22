import React from 'react'
import { Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

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
            {/* <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}
            <Link className="list-group-item" to="/about">About</Link>
            <Link className="list-group-item active" to="/home">Home</Link>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <h3>我是Home的内容</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
