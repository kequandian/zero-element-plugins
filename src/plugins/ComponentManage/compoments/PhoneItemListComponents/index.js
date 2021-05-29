import React from 'react';
import { PageGridContainer, PhoneGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';

import PlainList from 'zero-element-boot/lib/components/list/PlainList';

import Cart from 'zero-element-boot/lib/components/cart/Cart';

import TxtAndLeftImgItem from '@/components/item/phone/TxtAndLeftImgItem/Sandbox';

export default function Index(props) {

    const config = {
        layout: {
            xname: 'Flexbox',
            props: {
                align: 'column',
            },
            cart: {
                xname: 'Cart',
                props: {
                    linewidth: '0px',
                    padding: '10px',
                    margin: '10px 10px',
                },
            }
        },
    }

    return (
        <PageGridContainer title={"流组件"} bg="#ffffff" showLayoutBorder={true}>
            <AutoComponent {...config}>
                    <PhoneGridContainer>
                            <Flexbox align="start" direction="column">
                                <Cart margin='0px' linewidth='0px' padding='15px 10px 10px 10px'>
                                    <TxtAndLeftImgItem width='300px' />
                                </Cart>
                            </Flexbox>
                    </PhoneGridContainer>
            </AutoComponent>
        </PageGridContainer>
    )
}