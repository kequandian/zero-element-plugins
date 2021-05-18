import React from 'react';
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import LogoSubtitleItem from '@/components/item/LogoSubtitleItem/Sandbox';
import DesignCarItem from '@/components/item/DesignCarItem/Sandbox';
import TxtAndRightImgCartItem from '@/components/item/TxtAndRightImgCartItem/Sandbox';
import TitleSubtitleImageitem from '@/components/item/TitleSubtitleImageitem/Sandbox';

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
                },
            }
        },
    }

    return (
        <PageGridContainer title={"复合组件"} bg="#ffffff" showLayoutBorder={true}>
            <AutoComponent {...config}>
                <LogoSubtitleItem />
                <DesignCarItem />
                <TxtAndRightImgCartItem />
                <TitleSubtitleImageitem />
            </AutoComponent>
        </PageGridContainer>
    )
}