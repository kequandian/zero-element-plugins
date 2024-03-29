import React from 'react';
import { AutoComponent } from 'zero-element-boot';
import ImageAnimation from '@/pages/NewDemo/ImageAnimation'
import TextContent from '@/pages/NewDemo/TextContent'
import FootContent from '@/pages/NewDemo/FootContent'
import layout from "./layout"

export default function ExampleTwo(props){
    // console.log(props)
    const allComponents={
        ImageAnimation,
        TextContent,
        FootContent,
    };
    const config={
        layout,
        ...props,
    }
    console.log(config)
    console.log(allComponents)
    return (
        <div className="BigBox">
            <AutoComponent {...config} allComponents={allComponents}/>
        </div>
    )
}