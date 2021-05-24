import React from 'react'
import SelectedCartOutSideIcon from './index';

export default function Sandbox(props) {

    const { stroke='#2196F3' } = props;

    return (
        <div style={{ width: "300px" }}>
            <SelectedCartOutSideIcon isSelected={true} fill={'transparent'} stroke={stroke} lineWidth='1px'>
                <div>
                    SelectedCartOutSideIcon
                </div>
            </SelectedCartOutSideIcon>
        </div>
    )
}