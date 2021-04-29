import React from 'react'
import Title from '@/plugins/ComponentsList/ComponentsItem/presenter/Title'
import SelectList from '@/plugins/ComponentsList/ComponentsItem/presenter/SelectList'
import { AutoComponent } from 'zero-element-boot'

export default function ComponentsItem(props){
    const allComponents={
        Title,
        SelectList
    }
    const config={
        layout:{
            xname:"Flexbox",
            props:{
                align:"start",
                direction:"column"
            },
            children:[
                {
                    presenter:"Title",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                title:"content",
                            }
                        }
                    }
                },
                {
                    presenter:"SelectList",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                text:"text"                             
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