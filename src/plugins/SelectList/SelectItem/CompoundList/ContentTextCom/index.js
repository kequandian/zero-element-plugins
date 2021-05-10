import React from 'react'
import SelectCompound from '@/plugins/SelectList/SelectItem/CompoundList/SelectCompound'
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
                        text:"text"
                    }
                }
            },
            cart:{
                xname:"SelectedCart",
                indicator:"SelectIndicatorCart",
                props:{
                    padding:0,
                    margin:"10px"
                }
            },
            container:"SelectionList"
        },
        items:content
    }
    return (
        <AutoLayout {...config}>
            <SelectCompound />
        </AutoLayout>
    )
    
}