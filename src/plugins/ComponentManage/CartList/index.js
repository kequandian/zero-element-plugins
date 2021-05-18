import React from 'react';
import Container from "zero-element-boot/lib/components/container/Container"
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import ItemCart from '@/components/cart/ItemCart/Sandbox';
import PageCart from '@/components/cart/PageCart/Sandbox';
import SelectedCart from '@/components/cart/SelectedCart/Sandbox';
import SelectedCartOutSideIcon from '@/components/cart/SelectedCartOutSideIcon/Sandbox';
import SelectedRightLineCart from '@/components/cart/static/SelectedCart/Sandbox';

//boot
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import Circle from 'zero-element-boot/lib/components/cart/Circle';
import Corner from 'zero-element-boot/lib/components/cart/Corner';
import ItemCartBoot from 'zero-element-boot/lib/components/cart/ItemCart';
import OffsetCart from 'zero-element-boot/lib/components/cart/OffsetCart';
import Rectangle from 'zero-element-boot/lib/components/cart/Rectangle';
import Shape from 'zero-element-boot/lib/components/cart/Shape';

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

                <Cart margin='0' padding='16px'>
                    <div>Cart</div>
                </Cart>

                <div style={{width: '70px'}}>
                    <Circle margin='0' padding='16px' corner='35px' fill='#fff' lineWidth='1'>
                        <div  style={{width: '70px', height: '64px', lineHeight:'64px', marginLeft: '10px'}}>Circle</div>
                    </Circle>
                </div>
                
                <Corner margin='0' padding='16px' corner='8px' fill='#fff' lineWidth='1'>
                    <div  style={{height: '50px', lineHeight:'50px', marginLeft: '10px'}}>Corner</div>
                </Corner>

                <ItemCartBoot>
                    <div  style={{height: '50px', lineHeight:'50px', background: '#E4F1F5'}}>ItemCartBoot</div>
                </ItemCartBoot>
                
                <OffsetCart>
                    <div  style={{height: '50px', lineHeight:'50px', background: '#E4F1F5'}}>OffsetCart</div>
                </OffsetCart>
                
                <Rectangle>
                    <div  style={{height: '50px', lineHeight:'50px', paddingLeft: '10px', background: '#E4F1F5'}}>Rectangle</div>
                </Rectangle>

                <Shape fill = '#1ee' stroke = '#9bd' lineWidth = '2'>
                    <div  style={{height: '50px', lineHeight:'50px', paddingLeft: '10px', background: '#E4F1F5'}}>Shape</div>
                </Shape>

            </AutoComponent>
        </PageGridContainer>
    )
}