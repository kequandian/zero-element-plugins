import React from 'react'
require('./index.less')

export default function ContentText(props){
    return (
        <div className="ContentText">解题思路 找不到背包问题了。就拿这道题练手了。还好比较顺利 跳(n)的方案数=『跳(n-1）的方案数』+『跳(n-2)的方案数』 比如跳到第5格。有“两种”方法，
        从第4格往上跳1格，或者从第3格往上跳2格，这个时候的方案数其实就是 到3和 到4的方案数的和。dp数组存储到对应位置的跳跃方案数。</div>
    )
}