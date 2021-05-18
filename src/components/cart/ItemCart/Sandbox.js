import React from 'react'
import ItemCart from './index';

export default function Sandbox(props) {

    return (
        <div style={{ width: "300px" }}>
            <ItemCart>
                <div style={{height:'50px', padding: '10px'}}>
                    ItemCart
                </div>
            </ItemCart>
        </div>
    )
}