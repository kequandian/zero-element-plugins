import React from 'react';
import Seperator from '@/plugins/testUserSelection/presenter/Seperator';
import FormContainerTitle from '@/components/presenter/item/FormContainerTitle'
import FormFieldTitle from '@/components/presenter/item/FormFieldTitle'
import Cart from 'zero-element-boot/lib/components/cart/Cart'
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';

import ItemCart from '@/components/cart/ItemCart';

require('./index.less')

/**
 * 
 * @param {string} title
 * @returns 
 */
// const Seperator=require('@/plugins/testUserSelection/presenter/Seperator')
export default function PageGridContainer(props) {

    const { children, title, subtitle, corner, showLayoutBorder = false, bg = '#E5E5E5' } = props;

    return React.Children.map(children, child => {
        return (
            <div className={showLayoutBorder ? "PageGridContainer" : ""} style={{ backgroundColor: `${bg}`, marginBottom: '10px', padding: '0px 10px 10px 10px' }}>
                {title ? (
                    <Flexbox align="start" direction="row" justify="space-between" >
                        <FormContainerTitle content={title} />
                        {/* <FormFieldTitle corner={corner} content={subtitle}/> */}
                    </Flexbox>
                ) : null}
                <Seperator lineType="solid"/>
                <div style={{marginBottom: '5px'}}></div>
                <ItemCart padding="0">
                    {child}
                </ItemCart>
            </div>
        )
    })
}