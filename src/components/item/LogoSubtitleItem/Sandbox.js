import React from 'react'
import LogoSubtitleItem from '@/components/item/LogoSubtitleItem';

export default function Sandbox(props) {

    const config = {
        title: "Title",
        subtitle: "Subtitle",
        timestamp: "昨天",
        url: "https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav"
    }

    return (
        <div style={{ width: "300px" }}>
            <LogoSubtitleItem {...config} />
        </div>
    )
}