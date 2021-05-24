import React from 'react';
import Seperator from '@/plugins/testUserSelection/presenter/Seperator';
import Cart from 'zero-element-boot/lib/components/cart/Cart'
import Container from "zero-element-boot/lib/components/container/Container"
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';

import ItemCart from '@/components/cart/ItemCart';

require('./index.less')

/**
 * 
 * @param {string} widthSize 宽度
 * @returns 
 */
export default function PhoneGridContainer(props) {

    const { children, bg = "#ffffff" } = props;

    return React.Children.map(children, child => {
        return (
            <div className="PhoneGridContainer" style={{ background: `${bg}` }}>
                <div className="header">
                    <Container>
                        <Flexbox align="start" direction="between" >
                            <div>15:35</div>
                            <div className="headerCenter">
                            </div>
                            <div>4G</div>
                        </Flexbox>
                    </Container>
                </div>
                <div style={{flex: 1}}>
                    <ItemCart padding="0">
                        {child}
                    </ItemCart>
                </div>
                <Seperator/>
            </div>
        )
    })
}