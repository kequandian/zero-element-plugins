import React from 'react';
import LogoSubtitleItem from '@/components/item/LogoSubtitleItem'
import layout from './layout'
import { AutoLayout } from 'zero-element-boot/lib/components';
const useTokenRequest = require('zero-element-boot/lib/components/hooks/useTokenRequest');



/**
 * @param {string} logo 图标
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @param {string} timestamp 时间戳
 * @returns
 */

export default function TodoList(props) {
    const api = '/api/TodoList';

    const [ data ] = useTokenRequest(api);
    // console.log("props=",props)
    // console.log("data=",data)

    const { onhandleClick,onItemClickHandle} = props;

    
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