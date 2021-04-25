import React from 'react'
import QuestionList from '@/plugins/QuestionList'
require('./index.less')

export default function Top(props){
    return (
        <div className="Top">
            <div className="TopLeft"></div>
            <div className="TopRight">练一练</div>
            <QuestionList />
        </div>
    )
}