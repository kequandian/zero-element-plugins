import React from 'react';
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import HoverShadowCart from '@/components/cart/static/ShadowCart/HoverShadowCart';

import FloatingCartWhite from '@/components/cart/static/ShadowCart/FloatingCartWhite';
import HoverCartLightWhite from '@/components/cart/static/ShadowCart/HoverCartWhite';
import DropdownsCartWhite from '@/components/cart/static/ShadowCart/DropdownsCartWhite';

export default function Index(props) {

    const config = {
        layout: {
            xname: 'Flexbox',
            props: {
                align: 'start',
                direction: 'column',
                justify: "start",
                margin: '0 10px'
            },
            cart: {
                xname: 'Cart',
                props: {
                    linewidth: '0',
                    padding: '0',
                    margin: '10px 10px',
                    shadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
                },
            }
        },
    }

    const BodyContent = ({text}) => {
        return <div style={{ height: '50px', lineHeight: '50px', marginLeft: '10px' }}>{text}</div>
    }

    return (
        <PageGridContainer title={"ShadowCart"} bg="#ffffff" showLayoutBorder={true}>
            <AutoComponent {...config}>
                <div style={{ width: "300px" }}>
                    <HoverShadowCart margin='0'>
                        <BodyContent text='HoverShadowCart' />
                    </HoverShadowCart>
                </div>
                
                <FloatingCartWhite margin='0'>
                    <BodyContent text='FloatingCartWhite'/>
                </FloatingCartWhite>
                
                <HoverCartLightWhite margin='0'>
                    <BodyContent text='HoverCartLightWhite'/>
                </HoverCartLightWhite>
                
                <DropdownsCartWhite margin='0'>
                    <BodyContent text='DropdownsCartWhite'/>
                </DropdownsCartWhite>
            </AutoComponent>
        </PageGridContainer>
    )
}