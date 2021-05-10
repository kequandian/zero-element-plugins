import React from 'react'
import {AutoLayout} from 'zero-element-boot/lib/components'
require('./index.less')
import LayoutItem from '@/plugins/SelectList/SelectItem/LayoutList/LayoutItem'

export default function LayoutList(props){
    const {selectionTwo}=props
    // const commit=[
    //         {
    //             title:"Layout",
    //                 layoutText:[
    //                     {
    //                         text:"Flexbox"
    //                     },
    //                     {
    //                         text:"Itembox"
    //                     },
    //                     {
    //                         text:"SelectBox"
    //                     }
    //                 ]
    //         }
    //     ]
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
                            title:"title",
                            layoutText:"layoutText"
                        }
                    }
                },
                cart:{
                    xname:"ItemCart",
                    props:{
    
                    }
                },
                container:"PlainList"
            },
            items:selectionTwo
        }
        return (
            <div className="LayoutList">
                <AutoLayout {...config}>
                    <LayoutItem />
                </AutoLayout>
            </div>
        )
    }