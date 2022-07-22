import React from 'react'
import News from './pages/Home/News'
import Messages from './pages/Home/Messages'

export default function Home() {
    return (
        <div>
            <h3>我是Home的内容</h3>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <a className="list-group-item active" href="./home-news.html">News</a>
                    </li>
                    <li>
                        <a className="list-group-item " href="./home-message.html">Message</a>
                    </li>
                </ul>
                <News></News>
                <Messages></Messages>
            </div>
        </div>
    )
}
