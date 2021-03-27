import React from 'react';
import Message from '@/plugins/TheAdList/TheAdItem/components/Message'
import ImageAnimation from '@/plugins/TheAdList/TheAdItem/components/Content/ImageAnimation'
import ContentText from '@/plugins/TheAdList/TheAdItem/components/Content/Content_text'
import ContentFinish from '@/plugins/TheAdList/TheAdItem/components/Content/Content_finish'
import layout from './layout'
import { AutoComponent } from 'zero-element-boot';
require('./index.less')

export default function TheAdItem(props){
    const allComponents={
        Message,
        ImageAnimation,
        ContentText,
        ContentFinish,
    };
    const config={
        layout,
        ...props
    }
    return (
        <div className="Bigbox">
            <AutoComponent  {...config} allComponents={allComponents}/>
        </div>
    )
}