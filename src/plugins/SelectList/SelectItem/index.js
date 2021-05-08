import React from 'react'
import { AutoComponent } from 'zero-element-boot'
import Title from "@/plugins/SelectList/SelectItem/Title"
import ContentText from "@/plugins/SelectList/SelectItem/ContentText"

export default function SelectItem(props){
    console.log("1111=",props)

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
                                cart:"cart"
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