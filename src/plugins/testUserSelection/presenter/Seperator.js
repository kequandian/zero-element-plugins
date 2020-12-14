import React from 'react';

export default function (props) {
    const { lineType } = props;
    return <div style={{borderStyle:`${lineType}`, borderWidth:'0 0 1px 0', borderColor:'#ececec'}}></div>
}