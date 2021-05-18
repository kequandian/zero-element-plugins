import React from 'react';
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import ItemCart from '@/components/cart/ItemCart/Sandbox';
import PageCart from '@/components/cart/PageCart/Sandbox';
import SelectedCart from '@/components/cart/SelectedCart/Sandbox';
import SelectedCartOutSideIcon from '@/components/cart/SelectedCartOutSideIcon/Sandbox';
import SelectedRightLineCart from '@/components/cart/static/SelectedCart/Sandbox';

export default function Index(props) {

    const config = {
        layout: {
            xname: 'Flexbox',
            props: {
                align: 'start',
                direction: 'column',
                justify: "start"
            },
            cart:{
                xname: 'Cart',
                props: {
                    linewidth: '0',
                    padding: '0px',
                    margin: '10px 10px',
                    shadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
                },
            }
        },
    }

    return (
        <PageGridContainer title={"Cart"} bg="#ffffff" showLayoutBorder={true}>
            <AutoComponent {...config}>
                <ItemCart />
                <PageCart />
                <SelectedCart />
                <SelectedCartOutSideIcon />
                <SelectedRightLineCart />
            </AutoComponent>
        </PageGridContainer>
    )
}