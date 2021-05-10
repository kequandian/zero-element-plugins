import React from 'react'
import { AutoComponent } from 'zero-element-boot'
import CartList from "@/plugins/SelectList/SelectItem/CartList"
import LayoutList from "@/plugins/SelectList/SelectItem/LayoutList"

export default function SelectContent(props){

    const allComponents={
        CartList,
        LayoutList
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
                    presenter:"CartList",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                selectionOne:"selectionOne"
                            }
                        }
                    }
                },
                {
                    presenter:"LayoutList",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                selectionTwo:"selectionTwo"
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