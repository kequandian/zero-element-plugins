import React from 'react';
import LogoSubtitleItem from '@/components/presenter/item/LogoSubtitleItem'
import layout from './layout'
import { AutoLayout } from 'zero-element-boot/lib/components';


/**
 * @param {string} logo 图标
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @param {string} timestamp 时间戳
 * @returns
 */

export default function TodoList(props) {

    const { onhandleClick,onItemClickHandle,data } = props;

    
    const config = {
        items: data.length > 0 ? data : [],
        layout: layout,
    }
    
    const onClick = (item) => {
        console.log(item)
        onItemClickHandle();    
    }
    return (
        <AutoLayout {...config}  onItemClick={onClick}>
            <LogoSubtitleItem onToDoItemClick={onhandleClick} />
        </AutoLayout>
    )

}