import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Messages extends Component {
    state = {
        messageArr: [
            { id: "01", title: "message1" },
            { id: "02", title: "message2" },
            { id: "03", title: "message3" }
        ]
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map(msg => {
                            return (
                                <li key={msg.id}>
                                    <Link to="/home/messages/details">{msg.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path='/home/messages/details' component={Detail}></Route>
            </div>
        )
    }
}
