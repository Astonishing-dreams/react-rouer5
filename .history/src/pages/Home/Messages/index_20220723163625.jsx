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
                                    {/* params参数的传递 */}
                                    {/* <Link to={`/home/messages/detail/${msg.id}/${msg.title}`}>{msg.title}</Link> */}

                                    {/* search参数的传递 */}
                                    <Link to={`/home/messages/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path='/home/messages/detail/:id/:title' component={Detail}></Route>
            </div>
        )
    }
}
