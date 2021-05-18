import React from 'react';
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import FormList from '@/plugins/FormList';
import CartList from "@/plugins/SelectList/SelectItem/CartList";
import LayoutList from "@/plugins/SelectList/SelectItem/LayoutList";
import CompoundComponents from '@/plugins/ComponentManage/compoments/CompoundComponents';
import SelectedCart from '@/plugins/ComponentManage/compoments/SelectedCart';

require('./index.less')

export default function Index(props) {

    const config = {
        layout: {
            xname: 'Flexbox',
            props: {
                align: 'start',
                direction: 'row',
                justify: "start"
            },
            // cart: {
            //     xname: "Cart",
            //     props: {
            //         padding: '10px'
            //     }
            // },
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

    const LayoutConfig = {
        selectionTwo: [
            {
                title: "Layout",
                layoutText: [
                    {
                        text: "Flexbox"
                    },
                    {
                        text: "Itembox"
                    },
                    {
                        text: "SelectBox"
                    }
                ]
            }
        ]
    }

    return (
        <PageGridContainer title={"组件展示"} subtitle={"· · ·"} corner={"13px"}>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{width: "330px"}}>
                    <FormList {...formConfig} />
                </div>
                <div style={{flex: "1"}}>
                    <AutoComponent {...config}>
                        <CartList {...CartConfig} />
                        <LayoutList {...LayoutConfig} />
                        <CompoundComponents />
                        <SelectedCart />
                    </AutoComponent>
                </div>
            </div>
            
        </PageGridContainer>
    )
}