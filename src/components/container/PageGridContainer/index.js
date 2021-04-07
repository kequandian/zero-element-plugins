import React from 'react';
import Seperator  from '@/plugins/testUserSelection/presenter/Seperator';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import FormContainerTitle from '@/components/presenter/item/FormContainerTitle'
import FormFieldTitle from '@/components/presenter/item/FormFieldTitle'
import Cart from 'zero-element-boot/lib/components/cart/Cart'
import Container from "zero-element-boot/lib/components/container/Container"
require('./index.less')

/**
 * 
 * @param {string} title
 * @returns 
 */
// const Seperator=require('@/plugins/testUserSelection/presenter/Seperator')
export default function PageGridContainer(props){
    // console.log(props)
    const {children, title,subtitle}=props
    // console.log(title)
    return React.Children.map(children,child=>{
        return (
        <div className="PageGridContainer" style={{}}>
            <Cart padding="4px" linewidth="0px" borderStyle="solid"  fill="#ffffff" >
            <Container>    
            <Flexbox align="start-with-last-end" direction="row" justify="space-between" >
                <FormContainerTitle content={title} />
                <FormFieldTitle content={subtitle}/>
            </Flexbox>
            </Container> 
            </Cart>
            <Seperator />
            <div>
                <Cart padding="0" linewidth="0px">
                    {child}
                </Cart>
            </div>
        </div>
        )
    })    
}