import React from 'react'
import { AutoComponent } from 'zero-element-boot'
import Title from "@/plugins/SelectList/SelectItem/Title"

export default function SelectCartItem(props){
    const allComponents={
        Title,
    }
    const config={
        layout:{
            xname:"Flexbox",
            props:{
                align:"start",
                direction:"column",
                justify:"start"
            },
            children:[
                {
                    presenter:"Title",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                title:"title",
                            }
                        }
                    }
                },
            ]
        },
        ...props
    }
    return (
            <AutoComponent {...config} allComponents={allComponents} />
    )
}