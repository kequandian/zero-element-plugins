import React from 'react';
import ImageAnimation from '@/pages/NewDemo/ImageAnimation'
import TextContent from '@/pages/NewDemo/TextContent'
import FootContent from '@/pages/NewDemo/FootContent'
require('./Example_two.less')

export default function BigBox(props){
    return (
        <div className="BigBox">
            <ImageAnimation imgUrl={props.data.imgUrl}/>
            <TextContent text={props.data}/>
            <FootContent time={props.data}/>
        </div>)
}