import React from 'react'
import { AutoLayout } from 'zero-element-boot/lib/components'
import FormItem from '@/plugins/FormList/FormItem'
import SelectCart from 'zero-element-boot/lib/components/cart/SelectCart'


export default function FormList(props){
    const commit=[
        {
            title:"My Energy",
            account:"1"
        },
        {
            title:"Notifications",
            account:""
        },
        {
            title:"Referrals",
            account:""
        }
    ]
    const config={
        layout:{
            xname:"Flexbox",
            props:{
                align:"betweent",
                direction:"column"
            },
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        title:"title",
                        account:"account"
                    }
                }
            },
            cart:{
                xname:"ItemCart",
                indicator: "SelectIndicatorCartab",     
                props:{
                    lineColor:"#5f9ea0",
                    activeLeftLine:"5px",
                }
            },
            container:"SelectedList"
        },
        items:commit
    }
    return (
        <AutoLayout {...config}>
            <FormItem />
        </AutoLayout>
    )
}