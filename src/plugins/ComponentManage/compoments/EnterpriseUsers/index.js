import React from 'react';
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import LogoSubtitleItem from '@/components/item/LogoSubtitleItem/Sandbox';

export default function Index(props) {

    const config = {
        layout: {
            xname: 'Flexbox',
            props: {
                align: 'start',
                direction: 'column',
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

    return (
        <PageGridContainer title={"复合组件"} subtitle={"· · ·"} corner={"13px"} showLayoutBorder={true} bg="#F0F4F7">
            <AutoComponent {...config}>
                <LogoSubtitleItem/>
            </AutoComponent>
        </PageGridContainer>
    )
}