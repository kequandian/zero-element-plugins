import React from 'react';

export default function (props) {

    const { avatarIcon } = props;

    if(avatarIcon){
        return <img src={avatarIcon}  style={{width:'40px', height:'40px', borderRadius:'32px'}} />;
    }else {
        return <div style={{width:'40px', height:'40px', borderRadius:'20px', backgroundColor:'#cccccc'}} ></div>;
    }

}