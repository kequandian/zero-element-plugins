import React from 'react';
import bindFiles from './gateway.json'
import LogoSubtitleList from '@/components/list/LogoSubtitleList'

const useTokenRequest = require('zero-element-boot/lib/components/hooks/useTokenRequest');

/**
 * @param {Event} onListItemClick 子项点击事件
 * @param {string} logo 图标
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @param {string} timestamp 时间戳
 * @returns
 */
export default function TodoList(props) {
    const { items, onListItemClick } = props;
    const api = '/api/TodoList';
    const [ data ] = useTokenRequest({api, bindFiles});
    const config = {
        items: items ? items : (data.length > 0 ? data : []),
        onListItemClick
    }
    return (
        <LogoSubtitleList {...config}></LogoSubtitleList>
    )
}