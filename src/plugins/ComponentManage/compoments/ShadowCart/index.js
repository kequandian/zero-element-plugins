import React from 'react';
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import HoverShadowCart from '@/components/cart/static/ShadowCart/HoverShadowCart';

import FloatingCartWhite from '@/components/cart/static/ShadowCart/FloatingCartWhite';
import HoverCartLightWhite from '@/components/cart/static/ShadowCart/HoverCartWhite';
import DropdownsCartWhite from '@/components/cart/static/ShadowCart/DropdownsCartWhite';
import TrainingCart from '@/components/cart/static/ShadowCart/TrainingCart';
import BannerLargeBoardCart from '@/components/cart/static/ShadowCart/BannerLargeBoardCart';
import ArticleDetailBgCart from '@/components/cart/static/ShadowCart/ArticleDetailBgCart';

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
                
                <TrainingCart margin='0'>
                    <BodyContent text='TrainingCart'/>
                </TrainingCart>

                <BannerLargeBoardCart margin='0'>
                    <BodyContent text='BannerLargeBoardCart'/>
                </BannerLargeBoardCart>
                
                <ArticleDetailBgCart margin='0'>
                    <BodyContent text='ArticleDetailBgCart'/>
                </ArticleDetailBgCart>

            </AutoComponent>
        </PageGridContainer>
    )
}