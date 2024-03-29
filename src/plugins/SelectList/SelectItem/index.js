import React from 'react'
import { AutoComponent } from 'zero-element-boot'
import Title from "@/plugins/SelectList/SelectItem/Title"
import ContentText from "@/plugins/SelectList/SelectItem/CartList/ContentText"
require('./index.less')

export default function SelectItem(props){
    // console.log(props)

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
        <div className="SelectItem">
            <AutoComponent {...config} allComponents={allComponents} />
        </div>
    )
}