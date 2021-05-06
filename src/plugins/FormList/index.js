import React from 'react'
import { AutoLayout } from 'zero-element-boot/lib/components'
import FormItem from '@/plugins/FormList/FormItem'
import SelectCart from 'zero-element-boot/lib/components/cart/SelectCart'


export default function FormList(props){
   
    // const commit=[
    //     {
    //         title:"My Energy",
    //         account:"1"
    //     },
    //     {
    //         title:"Notifications",
    //         account:""
    //     },
    //     {
    //         title:"Referrals",
    //         account:""
    //     },
    //     {
    //         title:"",
    //         account:""
    //     }
    // ]
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
        },
        {
            title:"",
            account:""
        },
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
        },
        {
            title:"",
            account:""
        },
        {
            title:"My Account",
            account:""
        },
        {
            title:"Statements",
            account:""
        }
    ]
    const config={
        layout:{
            xname:"Itembox",
            props:{
                align:"betweent",
                direction:"column"
            },
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        logo:"logo",
                        title:"title",
                        account:"account"
                    }
                }
            },
            cart:{
                xname:"ItemCart",
                indicator: "SelectIndicatorCart",        

                props:{
                    lineColor:"#5f9ea0",
                    activeLeftLine:"5px",
                }
            },
            container:"SelectionList"
        },
        items:commit
    }
    return (
        <AutoLayout {...config}>
            <FormItem />
        </AutoLayout>
    )
}