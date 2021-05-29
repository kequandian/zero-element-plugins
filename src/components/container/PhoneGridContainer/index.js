import React from 'react';
import Seperator from '@/plugins/testUserSelection/presenter/Seperator';
import Cart from 'zero-element-boot/lib/components/cart/Cart'
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
                    <Flexbox align="between">
                        <div>15:35</div>
                        <div className="headerCenter">
                        </div>
                        <div>4G</div>
                    </Flexbox>
                </div>
                <div style={{ flex: 1 }}>
                    <ItemCart padding="0">
                        {child}
                    </ItemCart>
                </div>
                <Seperator />
                <div className="footer">
                    <Flexbox align="between" >
                        <div>tab1</div>
                        <div>tab2</div>
                        <div>tab3</div>
                        <div>tab4</div>
                    </Flexbox>
                </div>
            </div>
        )
    })
}