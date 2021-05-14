import React from 'react'
import Body from './index';
import SelectedCartTxtStatic from '@/components/cart/static/SelectedCart';

export default function Sandbox(props) {

    const config = {
        title: "Content",
        padding: "6px",
        lineColor: "#1496BB",
        activeLeftLine: "5px",
    }

    return (
        <div style={{ width: "300px"}}>
            <SelectedCartTxtStatic isSelected={true}>
                <Body {...config} />
            </SelectedCartTxtStatic>
        </div>
    )
}