import React from 'react';
import Title from '@/plugins/NewDemo/Title';
import TheText from '@/plugins/NewDemo/TheText'

export default function TextContent(props){
    // console.log(props)
    return (
        <div className="TextContent">
            <Title title={props.title}/>
            <TheText theText={props.theText}/>
        </div>
    )
}