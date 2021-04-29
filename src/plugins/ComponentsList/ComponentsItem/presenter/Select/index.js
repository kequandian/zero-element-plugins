require('./index.less')
import React from 'react'

export default function Select(props){
    const {content}=props
    return (
        <div className="select"><img  src="https://tse2-mm.cn.bing.net/th/id/OIP.wTjaurrr0s3OW0uQujk5nwHaHa?w=180&h=180&c=7&o=5&pid=1.7"/>{content}</div>
        
    )
}