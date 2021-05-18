import React from 'react'
import SelectedCart from './index';

export default function Sandbox(props) {

    return (
        <div style={{ width: "300px" }}>
            <SelectedCart isSelected={true}>
                <div>
                    SelectedCart
                </div>
            </SelectedCart>
        </div>
    )
}