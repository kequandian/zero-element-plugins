import { AutoLayout } from 'zero-element-boot/lib/components';
import React from 'react'
import SelectContent from '@/plugins/SelectList/SelectItem/SelectContent'
require('./index.less')

export default function SelectList(props){
    const {select} =props

    // const commit=[
    //     {
    //         title:"Cart",
    //         content:[
    //             {
    //                 text:"Corner"
    //             },
    //             {
    //                 text:"HoverShadowCart"
    //             },
    //             {
    //                 text:"SelectedCart"
    //             }
    //         ]
    //     },
    //     {
    //         title:"Layout",
    //         content:[
    //             {
    //                 text:"Flexbox"
    //             },
    //             {
    //                 text:"Itembox"
    //             },
    //             {
    //                 text:"SelectBox"
    //             }
    //         ]
    //     }
    // ]
    const config={
        layout:{
            xname:"Flexbox",
            props:{
                align:"start",
                direction:"column"
            },
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        cartText:"cartText",
                        layoutText:"layoutText"
                        // select:"select"
                    }
                }
            },
            cart:{
                xname:"ItemCart",
                props:{
                    padding:0,
                    margin:0
                }
            },
            container:"PlainList"
        },
        items:select
    }

    return(
        <div className="SelectList">
            <AutoLayout {...config} >
                <SelectContent/>
            </AutoLayout>
        </div>
        )
}