import React from 'react'
require('./index.less')

export default function Topic(props){
    const {topic}=props
    return (
        <div className="Topic">{topic}</div>
    )
}