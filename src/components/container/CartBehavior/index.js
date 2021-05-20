import React from 'react';

import NamedCart from 'zero-element-boot/lib/components/NamedCart';


require('./index.less')

/**
 * 
 * @param {string} hoverCart 
 * @param {string} selectedCart 
 * @returns 
 */
// const Seperator=require('@/plugins/testUserSelection/presenter/Seperator')
export default function CartBehavior(props) {

    const { children, hoverFlag, hoverCart, selectedCart } = props;

    const _cart = hoverCart || selectedCart || 'Cart';

    return (
        <NamedCart xname={_cart}>
            {
                React.Children.map(children, child => {
                        return child
                    })
            }
        </NamedCart>
    )

    // return React.Children.map(children, child => {
    //     return (
    //         <div>

    //         </div>
    //     )
    // })
}