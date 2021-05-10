import React from 'react'
import { AutoComponent } from 'zero-element-boot'
import Title from "@/plugins/SelectList/SelectItem/Title"
import ContentTexts from "@/plugins/SelectList/SelectItem/LayoutList/ContentTexts"

export default function LayoutItem(props){

    const allComponents={
        Title,
        ContentTexts
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
                    presenter:"ContentTexts",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                layoutText:"layoutText"
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