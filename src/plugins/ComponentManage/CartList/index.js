import React from 'react';
import Container from "zero-element-boot/lib/components/container/Container"
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';

//boot
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import Circle from 'zero-element-boot/lib/components/cart/Circle';
import Corner from 'zero-element-boot/lib/components/cart/Corner';
import ItemCart from 'zero-element-boot/lib/components/cart/ItemCart';
import Rectangle from 'zero-element-boot/lib/components/cart/Rectangle';

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
                
                <div style={{width: '300px'}}>
                    <Cart margin='0' padding='16px'>
                        <div>Cart</div>
                    </Cart>
                </div>

                <div style={{width: '70px'}}>
                    <Circle margin='0' padding='16px' corner='35px' fill='#fff' lineWidth='1' stroke='#d0cdcd'>
                        <div  style={{width: '70px', height: '64px', lineHeight:'64px', marginLeft: '10px'}}>Circle</div>
                    </Circle>
                </div>
                
                <Corner margin='0' padding='16px' corner='8px' fill='#fff' lineWidth='1'  stroke='#d0cdcd'>
                    <div  style={{height: '50px', lineHeight:'50px', marginLeft: '10px'}}>Corner</div>
                </Corner>

                <ItemCart padding="5px" margin='5px'>
                    <div  style={{height: '50px', lineHeight:'50px'}}>ItemCart</div>
                </ItemCart>
                
                <Rectangle stroke='#d0cdcd'>
                    <div  style={{height: '50px', lineHeight:'50px', paddingLeft: '10px', background: '#E4F1F5'}}>Rectangle</div>
                </Rectangle>

            </AutoComponent>
        </PageGridContainer>
    )
}