import React from 'react'
import Content from '@/plugins/FormList/FormItem/Content'
import { AutoComponent } from 'zero-element-boot/lib/components'
import Account from '@/plugins/FormList/FormItem/Account'
require('./index.less')

export default function FormItem(props){
    const allComponents={
        Content,
        Account
    }
    const config={
        layout:{
            xname:"Flexbox",
            props:{
                align:"start",
                direction:"row"
            },
            children:[
                {
                    presenter:"Content",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                logo:"logo",
                                title:"content"
                            }
                        }
                    }
                },
                {
                    presenter:"Account",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                account:"account"
                            }
                        }
                    }
                }
            ]
        },
        ...props
    }
    return (
        <div className="FormItem">
            <AutoComponent {...config} allComponents={allComponents}/>
        </div>
    )
}