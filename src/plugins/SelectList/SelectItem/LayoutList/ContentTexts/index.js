import React from 'react'
import SelectLayout from '@/plugins/SelectList/SelectItem/LayoutList/SelectLayout'
import { AutoLayout } from 'zero-element-boot'

export default function ContentTexts(props){

    const {layoutText}=props
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
        items:layoutText
    }
    return (
        <AutoLayout {...config}>
            <SelectLayout />
        </AutoLayout>
    )
    
}