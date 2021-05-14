import React from 'react'
import Body from './index';
import SelectedCartOutSideIcon from '@/components/cart/SelectedCartOutSideIcon';

export default function Sandbox(props) {

    const config = {
        title: "Content",
        isSelected: true
    }

    return (
        <div style={{ width: "300px" }}>
            <SelectedCartOutSideIcon padding='0px' stroke='#2196F3' lineWidth='1px'>
                <Body {...config} />
            </SelectedCartOutSideIcon>
        </div>
    )
}