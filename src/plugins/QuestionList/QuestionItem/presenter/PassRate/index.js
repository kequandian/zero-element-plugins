import React from 'react'
require('./index.less')

export default function PassRate(props){
    const {passRate}=props
    return (
        <div>
            <div className="PassRate">通过率 </div>
            <div className="PassRateNum">{passRate}</div>
        </div>
    )
}