import React from 'react'
import { AutoLayout } from 'zero-element-boot/lib/components'
import FormItem from '@/plugins/FormList/FormItem'
require('./index.less')
import SelectCart from 'zero-element-boot/lib/components/cart/SelectCart'


export default function FormList(props){
    const {form}=props
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
    //         title:"Bill Pay",
    //         account:""
    //     },
    //     {
    //         title:"Smart Rate",
    //         account:""
    //     },
    //     {
    //         title:"Wind Energy",
    //         account:""
    //     },
    //     {
    //         title:"Community Solar",
    //         account:""
    //     },
    //     {
    //         title:"HomeEfficiency",
    //         account:""
    //     },
    //     {
    //         title:"My Account",
    //         account:""
    //     },
    //     {
    //         title:"Statements",
    //         account:""
    //     }
    // ]
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
                        title:"title",
                        account:"account"
                    }
                }
            },
            cart:{
                xname:"ItemCart",
                indicator: "SelectIndicatorCartab",        

                props:{
                    padding:"6px",
                    lineColor:"#1496BB",
                    activeLeftLine:"5px",
                }
            },
            container:"SelectionList"
        },
        items:form
    }
    return (
        <div className="FormList">
        <AutoLayout {...config}>
            <FormItem />
        </AutoLayout>
        </div>
    )
}