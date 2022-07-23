import React, { Component } from 'react'

const DetailData = [
    { id: "01", content: "你好，中国" },
    { id: "02", content: "你好，浙江" },
    { id: "03", content: "你好，温州" },
]
export default class Detail extends Component {

    render() {
        return (
            <ul>
                <li>ID:</li>
                <li>TITLE:</li>
                <li>CONTENT:</li>
            </ul>
        )
    }
}
