import React from 'react';
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import HightlightCart from 'zero-element-boot/lib/components/cart/HightlightCart';


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
            cart:{
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


    return (
        <PageGridContainer title={"HoverCart"} bg="#ffffff" showLayoutBorder={true}>
            <AutoComponent {...config}>
                <div style={{ width: "300px" }}>
                    <HightlightCart margin='0' fill='#F3F3F3'>
                        <div  style={{height: '50px', lineHeight:'50px', marginLeft: '10px'}}>HightlightCart</div>
                    </HightlightCart>
                </div>
            </AutoComponent>
        </PageGridContainer>
    )
}