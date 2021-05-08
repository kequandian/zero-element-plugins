import { AutoLayout } from 'zero-element-boot/lib/components';
import React from 'react'
import SelectItem from '@/plugins/SelectList/SelectItem'

export default function SelectList(props){
    console.log("222=",props)
    const {cart}=props
    // const commit=[
    //     {
    //         title:"Cart",
    //         content:[
    //             {
    //                 text:"Corner"
    //             },
    //             {
    //                 text:"HoverShadowCart"
    //             },
    //             {
    //                 text:"SelectedCart"
    //             }
    //         ]
    //     },
    //     {
    //         title:"Layout",
    //         content:[
    //             {
    //                 text:"Flexbox"
    //             },
    //             {
    //                 text:"Itembox"
    //             },
    //             {
    //                 text:"SelectBox"
    //             }
    //         ]
    //     }
    // ]
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
                        title:"title",
                        cart:"cart"
                    }
                }
            },
            cart:{
                xname:"ItemCart",
                props:{
                    padding:0,
                    margin:0
                }
            },
            container:"PlainList"
        },
        items:cart
    }
    return(
        <AutoLayout {...config} >
            <SelectItem/>
        </AutoLayout>
        )
}