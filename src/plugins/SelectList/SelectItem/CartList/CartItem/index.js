import React from 'react'
import { AutoComponent } from 'zero-element-boot'
import Title from "@/plugins/SelectList/SelectItem/Title"
import ContentText from "@/plugins/SelectList/SelectItem/CartList/ContentText"

export default function CartItem(props){
    const allComponents={
        Title,
        ContentText
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
                {
                    presenter:"ContentText",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                cartText:"cartText"
                            }
                        }
                    }
                }
            ]
        },
        ...props
    }
    return (
            <AutoComponent {...config} allComponents={allComponents} />
    )
}