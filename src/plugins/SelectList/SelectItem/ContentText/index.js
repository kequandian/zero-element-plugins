import React from 'react'
import Select from '@/plugins/SelectList/SelectItem/Select'
import { AutoLayout } from 'zero-element-boot'

export default function ContentText(props){

    const {content}=props
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
                        content:"cart"
                    }
                }
            },
            cart:{
                xname:"SelectedCart",
                indicator: "SelectIndicatorCartab",        
                
                props:{
                    padding:0,
                    margin:"10px"
                }
            },
            container:"SelectionList"
        },
        items:content
    }
    console.log("config=",config)
    return (
        <AutoLayout {...config}>
            <Select />
        </AutoLayout>
    )
    
}