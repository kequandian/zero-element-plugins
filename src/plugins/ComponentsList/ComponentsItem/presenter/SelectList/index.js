import React from 'react'
import { AutoLayout } from 'zero-element-boot/lib/components';
import Select from '@/plugins/ComponentsList/ComponentsItem/presenter/Select'

export default function SelectList(props){
    const {text}=props
    const config={
        layout:{
            xname:"Flexbox",
            props:{
                align:"start",
                direction:"row"
            },
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        text:"text"
                    }
                }
            },
            cart:{
                xname:"HoverShadowCart",
                indicator: "SelectIndicatorCart",        
                
                props:{
                    padding:0,
                    margin:0
                }
            },
            container:"SelectionList"
        },
        items:text
    }
    return (
        // <div className="select">Cart</div>
        <AutoLayout {...config} >
            <Select/>
        </AutoLayout>
    )
}