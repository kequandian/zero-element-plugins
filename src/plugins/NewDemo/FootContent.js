import React from 'react';

export default function FootContent(props){
    const {time}=props;
    return (
        <div className="ExampleTime">
            <div className="theType">{time.adType}</div>
            <div className="theTime">{time.time}</div>
        </div>
    )
}