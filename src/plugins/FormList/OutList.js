import React from 'react'
import { AutoLayout } from 'zero-element-boot/lib/components'
import FormList from '@/plugins/FormList'
// import SelectCart from 'zero-element-boot/lib/components/cart/SelectCart'


export default function OutList(props){
    const commit=[
        {
            text:[
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
        },
        {
            text:[
                {
                    logo:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
                    title:"Bill Pay",
                    account:""
                },
                {
                    logo:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
                    title:"Smart Rate",
                    account:""
                },
                {
                    logo:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
                    title:"Wind Energy",
                    account:""
                },
                {
                    logo:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
                    title:"Community Solar",
                    account:""
                },
                {
                    logo:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
                    title:"HomeEfficiency",
                    account:""
                }
            ]
        },
        {
            text:[
                {
                    title:"My Account",
                    account:""
                },
                {
                    title:"Statements",
                    account:""
                }
            ]
        },
    ]
    const config={
        layout:{
            xname:"Flexbox",
            props:{
                align:"start",
                direction:"column"
            },
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        text:"text"
                    }
                }
            },
            cart:{
                xname:"ItemCart",
                // indicator: "SelectIndicatorCart",        

                props:{
                }
            },
            container:"PlainList"
        },
        items:commit
    }
    return (
        <AutoLayout {...config}>
            <FormList />
        </AutoLayout>
    )
}