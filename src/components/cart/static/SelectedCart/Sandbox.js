import React from 'react'
import SelectedRightLineCart from './index';
import SelectedRightLineCartBody from '@/components/item/SelectedCartTxtStatic';

export default function Sandbox(props) {

    const SelectedRightLineCartBodyConfig = {
        title: "SelectedRightLineCart",
        lineColor: "#1496BB",
        activeLeftLine: "5px",
        fill: 'transparent',
        margin: '0'
    }

    return (
        <div style={{ width: "300px" }}>
            <SelectedRightLineCart isSelected={true}>
                <SelectedRightLineCartBody {...SelectedRightLineCartBodyConfig} />
            </SelectedRightLineCart>
        </div>
    )
}