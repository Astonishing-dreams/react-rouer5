import React from 'react'

export default function Home() {
    return (
        <div>
            <h3>我是Home的内容</h3>
            <div>
                <ul class="nav nav-tabs">
                    <li>
                        <a class="list-group-item active" href="./home-news.html">News</a>
                    </li>
                    <li>
                        <a class="list-group-item " href="./home-message.html">Message</a>
                    </li>
                </ul>
                <News></News>
            </div>
        </div>
    )
}
