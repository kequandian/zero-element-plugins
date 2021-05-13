import React from 'react'
import { AutoLayout } from 'zero-element-boot/lib/components'
require('./index.less')
import CartItem from '@/plugins/SelectList/SelectItem/CartList/CartItem'
import SelectIndicatorCart from 'zero-element-boot/lib/components/cart/indicator/SelectIndicatorCart'
import { PageGridContainer } from '@/components/container'

export default function CartList(props) {
    const { selectionOne } = props

    // const commit=[
    //         {
    //             title:"Cart",
    //                 cartText:[
    //                     {
    //                         text:"Corner"
    //                     },
    //                     {
    //                         text:"HoverShadowCart"
    //                     },
    //                     {
    //                         text:"SelectedCart"
    //                     }
    //                 ]
    //         }
    //     ]
    const config = {
        layout: {
            xname: "Flexbox",
            props: {
                align: "start",
                direction: "column"
            },
            gateway: {
                xname: "Binding",
                props: {
                    binding: {
                        title: "title",
                        cartText: "cartText"
                    }
                }
            },
            cart: {
                xname: "SelectedCart",
                props: {

                }
            },
            container: "PlainList"
        },
        items: selectionOne
    }
    return (
        <div className="CartList">
            <PageGridContainer>
                <AutoLayout {...config}>
                    <CartItem />
                </AutoLayout>
            </PageGridContainer>
        </div>
    )
}