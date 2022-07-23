import React, { Component } from 'react'

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
                                    <a href="/message1">{msg.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
