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

    return (
        <PageGridContainer title={"组件展示"} subtitle={"· · ·"} corner={"13px"}>
            <AutoComponent {...config}>
                <LogoSubtitleItem/>
                
                <LogoSubtitleItem/>
                
                <LogoSubtitleItem/>
                
                <LogoSubtitleItem/>
            </AutoComponent>
        </PageGridContainer>
    )
}