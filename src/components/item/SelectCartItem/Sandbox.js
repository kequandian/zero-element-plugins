import React from 'react'
import Body from './index';
import SelectedCart from '@/components/cart/SelectedCart';

export default function Sandbox(props) {

    const config = {
        title: "Content",
        isSelected: true
    }

    return (
        <div style={{ width: "300px" }}>
            <SelectedCart padding='0px'>
                <Body {...config} />
            </SelectedCart>
        </div>
    )
}