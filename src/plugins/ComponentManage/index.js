import React from 'react';
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import FormList from '@/plugins/FormList'
import CartList from "@/plugins/SelectList/SelectItem/CartList"

export default function Index(props) {

    const config = {
        layout: {
            xname: 'Flexbox',
            props: {
                align: 'start',
                direction: 'row',
                justify: "start"
            },
            cart: {
                xname: "Cart",
                props: {
                    padding: '10px'
                }
            },
        },
    }

    const formConfig = {
        form: [
            {
                title: "头像组件",
                account: "3"
            },
            {
                title: "标题组件",
                account: ""
            },
            {
                title: "副标题组件",
                account: "1"
            }
        ]
    }

    const CartConfig = {
        selectionOne: [
            {
                title: "Cart",
                cartText: [
                    {
                        text: "Corner"
                    },
                    {
                        text: "HoverShadowCart"
                    },
                    {
                        text: "SelectCart"
                    }
                ]
            }
        ]
    }

    return (
        <PageGridContainer title={"组件展示"} subtitle={"· · ·"} corner={"13px"}>
            <AutoComponent {...config}>
                <FormList {...formConfig}/>
                <CartList {...CartConfig}/>
            </AutoComponent>
        </PageGridContainer>
    )
}