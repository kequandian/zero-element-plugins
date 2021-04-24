import React from 'react';
import layout from './layout'
import { AutoLayout } from 'zero-element-boot/lib/components';
import bindFiles from './gateway.json'
import LogoSubtitleItem from '@/components/item/LogoSubtitleItem'
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
    // const { onhandleClick, onItemClickHandle, items } = props;


    return (
        <LogoSubtitleList></LogoSubtitleList>
    )

}