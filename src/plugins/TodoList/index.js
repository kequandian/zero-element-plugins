import React from 'react';
import bindFiles from './gateway.json'
import LogoSubtitleList from '@/components/list/LogoSubtitleList'

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
    const { items, onTodoListClick } = props;
    const api = '/api/TodoList';
    const [ data ] = useTokenRequest({api, bindFiles});

    const config = {
        items: items ? items : (data.length > 0 ? data : []),
        onTodoListClick
    }
    return (
        <LogoSubtitleList {...config}></LogoSubtitleList>
    )

}