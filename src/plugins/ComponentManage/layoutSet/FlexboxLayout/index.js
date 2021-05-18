import React from 'react';
import Container from "zero-element-boot/lib/components/container/Container"
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';

import FlexboxLayout from './FlexboxLayout';

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
        <PageGridContainer title={"Flexbox"} bg="#ffffff" showLayoutBorder={true}>
            <AutoComponent {...config}>
                <FlexboxLayout/>
            </AutoComponent>
        </PageGridContainer>
    )
}