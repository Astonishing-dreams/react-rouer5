import React, { Component } from 'react'

const DetailData = [
    { id: "01", content: "你好，中国" },
    { id: "02", content: "你好，浙江" },
    { id: "03", content: "你好，温州" },
]
export default class Detail extends Component {

    render() {
        console.log(this.props);
        const { id, title } = this.props.match.params
        const findRightId = DetailData.find(item => item.id === id)
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findRightId.content}</li>
            </ul>
        )
    }
}
