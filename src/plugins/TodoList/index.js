import React from 'react';
import layout from './layout'
import { AutoLayout } from 'zero-element-boot/lib/components';
import LogoSubtitleItem from '@/components/item/LogoSubtitleItem'

const useTokenRequest = require('zero-element-boot/lib/components/hooks/useTokenRequest');

/**
 * @param {Event} onItemClickHandle 子项点击事件
 * @param {string} logo 图标
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @param {string} timestamp 时间戳
 * @returns
 */
export default function TodoList(props) {
    const { onhandleClick, onItemClickHandle, items } = props;

    const api = '/api/TodoList';
    const [ data ] = useTokenRequest(api);
    
    const config = {
        items: items ? items : (data.length > 0 ? data : []),
        layout: layout,
    }
    
    const onClick = (item) => {
        // console.log('TodoList:onClick:item data=', item)
        if(onItemClickHandle){
           onItemClickHandle(item);  
        }  
    }

    return (
        <AutoLayout {...config}  onItemClick={() => {}}>
            <LogoSubtitleItem onToDoItemClick={onClick} />
        </AutoLayout>
    )

}