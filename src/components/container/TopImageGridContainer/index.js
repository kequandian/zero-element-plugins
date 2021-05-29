import React from 'react';
import Seperator from '@/plugins/testUserSelection/presenter/Seperator';
import Cart from 'zero-element-boot/lib/components/cart/Cart'
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';

import LargeImage from '@/components/presenter/item/LargeImage'

import ItemCart from '@/components/cart/ItemCart';

require('./index.less')

/**
 * 
 * @param {string} imgUrl 图片路劲
 * @returns 
 */
export default function TopImageGridContainer(props) {

    const { children,
        imgUrl,
        showLayoutBorder = false,
        bg = '#E5E5E5',
        widthSize = '320px'
    } = props;

    return React.Children.map(children, child => {
        return (
            <div className={showLayoutBorder ? "TopImageGridContainer" : ""} style={{ backgroundColor: `${bg}`, width: `${widthSize}` }}>
                <Flexbox align="start" >
                    <LargeImage url={imgUrl} />
                </Flexbox>
                <ItemCart padding="0">
                    {child}
                </ItemCart>
            </div>
        )
    })
}