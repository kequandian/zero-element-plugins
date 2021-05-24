import React from 'react';
import { PageGridContainer, PhoneGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';

import PlainList from 'zero-element-boot/lib/components/list/PlainList';

import Cart from 'zero-element-boot/lib/components/cart/Cart';

import TitleSubtitleImageitem from '@/components/item/TitleSubtitleImageitem/Sandbox';


const items = [
    {
        id: "1",
    },
    {
        id: "2",
    },
    {
        id: "3",
    }
]

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

    const plainConfig = {
        items: items,
    }

    return (
        <PageGridContainer title={"手机壳容器"} bg="#ffffff" showLayoutBorder={true}>
            <AutoComponent {...config}>
                <PageGridContainer title={"PhoneGridContainer"} bg="#ffffff" showLayoutBorder={true}>

                    <PhoneGridContainer>
                        <PlainList {...plainConfig} >
                            <Flexbox align="start" direction="column">
                                <Cart margin='0px' linewidth='0px' padding='15px 10px 10px 10px'>
                                    <TitleSubtitleImageitem width='300px' />
                                </Cart>
                            </Flexbox>
                        </PlainList>
                    </PhoneGridContainer>

                </PageGridContainer>
            </AutoComponent>
        </PageGridContainer>
    )
}