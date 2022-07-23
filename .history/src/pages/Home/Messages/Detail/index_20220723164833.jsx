import React, { Component } from 'react'
import qs from 'query-string'

const DetailData = [
    { id: "01", content: "你好，中国" },
    { id: "02", content: "你好，浙江" },
    { id: "03", content: "你好，温州" },
]
export default class Detail extends Component {

    render() {
        console.log(this.props);
        /* 
            接受params参数
            const { id, title } = this.props.match.params
         */
        const { id, title } = qs.parse(this.props.location.search.slice(1))
        console.log(id);
        const findRight = DetailData.find(item => item.id === id)
        console.log(findRight);
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{123}</li>
            </ul>
        )
    }
}
