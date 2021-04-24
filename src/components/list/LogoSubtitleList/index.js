import React from 'react';
import layout from '@/components/list/LogoSubtitleList/layout'
import { AutoLayout } from 'zero-element-boot/lib/components';
import LogoSubtitleItem from '@/components/item/LogoSubtitleItem'


/**
 * @param {Event} onItemClickHandle 子项点击事件
 * @param {string} logo 图标
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @param {string} timestamp 时间戳
 * @returns
 */
export default function LogoSubtitleList(props) {
    const { onhandleClick, onItemClickHandle, ...data } = props;

    // const onClick = (item) => {
    //     // console.log('TodoList:onClick:item data=', item)
    //     if(onItemClickHandle){
    //        onItemClickHandle(item);  
    //     }  
    // }

    const config = {
        items: data.items,
        layout
    }

    return (
        <AutoLayout {...config}  onItemClick={() => onhandleClick}>
            <LogoSubtitleItem  />
        </AutoLayout>
    )

}