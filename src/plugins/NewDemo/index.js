import React from 'react';
import {AutoLayout} from 'zero-element-boot';
import layout from './layout';
import AdItem from '@/plugins/AdList/AdItem';

export default function Index(props){
    const {onItemClickHandle,data}=props;

    const config={
        items: data.length > 0 ? data : [],
        layout: layout,
    };

    const onClick=(item)=>{
        console.log(item)
        onItemClickHandle();
    }
    return (
        <AutoLayout {...config} onItemClick={onClick}>
            <div>1234</div>
        </AutoLayout>
    )
}