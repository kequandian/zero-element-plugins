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
            cart:{
                xname: 'Cart',
                props: {
                    padding: '10px',
                    margin: '10px 10px',
                    shadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
                },
            }
        },
    }

    return (
        <PageGridContainer title={"复合组件"} bg="#ffffff" showLayoutBorder={true}>
            <AutoComponent {...config}>
                <LogoSubtitleItem />
            </AutoComponent>
        </PageGridContainer>
    )
}