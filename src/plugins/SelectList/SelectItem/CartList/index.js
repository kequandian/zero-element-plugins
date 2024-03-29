import React from 'react'
import { AutoLayout } from 'zero-element-boot/lib/components'
require('./index.less')
import CartItem from '@/plugins/SelectList/SelectItem/CartList/CartItem'
import { PageGridContainer } from '@/components/container'

export default function CartList(props) {

    const { selectionOne } = props

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
        <PageGridContainer bg="#ffffff" showLayoutBorder={true}>
            <AutoLayout {...config}>
                <CartItem />
            </AutoLayout>
        </PageGridContainer>
    )
}