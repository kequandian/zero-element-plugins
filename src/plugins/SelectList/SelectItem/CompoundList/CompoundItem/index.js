import React from 'react'
import { AutoComponent } from 'zero-element-boot'
import Title from "@/plugins/SelectList/SelectItem/Title"
import ContentTextCom from "@/plugins/SelectList/SelectItem/CompoundList/ContentTextCom"

export default function CompoundItem(props){
    const allComponents={
        Title,
        ContentTextCom
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
                    presenter:"ContentTextCom",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                content:"content"
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