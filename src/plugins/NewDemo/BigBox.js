import React from 'react';
import ImageAnimation from '@/plugins/NewDemo/ImageAnimation'
import TextContent from '@/plugins/NewDemo/TextContent'
import FootContent from '@/plugins/NewDemo/FootContent'
require('./Example_two.less')

export default function BigBox(props){
    return (
        <div className="BigBox">
            <ImageAnimation imgUrl={props.data.imgUrl}/>
            <TextContent text={props.data}/>
            <FootContent time={props.data}/>
        </div>)
}