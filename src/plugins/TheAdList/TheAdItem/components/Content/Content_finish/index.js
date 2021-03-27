import React from 'react';
// import check from '@/plugins/TheAdList/images/check.png'
const check = require('./images/check.png')

require('./index.less')

export default function ContentFinish(props) {
    const { time } = props
    return (
        <div className="TheFinish">
            <div className="TheTime">{time}</div>
            <img src={check}/>
            {/* <Icon type="check" style={{color:'green'}}/> */}
            {/* <div className="Finish_logo"></div> */}
        </div>
    )
}