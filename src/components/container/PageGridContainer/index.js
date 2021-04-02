import Seperator  from '@/plugins/testUserSelection/presenter/Seperator';
import React from 'react';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import ItemTitle from '@/components/presenter/item/ItemTitle'
import ItemSubtitle from '@/components/presenter/item/ItemSubtitle'
import Cart from 'zero-element-boot/lib/components/cart/Cart'

/**
 * 
 * @param {string} title
 * @returns 
 */

export default function PageGridContainer(props){
    // console.log(props)
    const {children, title,subtitle}=props
    console.log(title)
    return React.Children.map(children,child=>{
        return (
        <div style={{width:"336px",backgroundColor:"#ffffff"}}>
            <Cart padding="4px" borderWidth="1px" borderStyle="solid"  fill="#ffffff" >
            <Flexbox align="center" direction="row" justify="center">
                <h3><ItemTitle content={title} /></h3>
                <ItemSubtitle content={subtitle}/>
            </Flexbox>
            </Cart>
            <Seperator />
            <div>
                <Cart padding="0" borderWidth="1px">
                    {child}
                </Cart>
            </div>
        </div>
        )
    })    
}