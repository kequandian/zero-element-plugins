import React from 'react'
import QuestionList from '@/plugins/QuestionList'

export default function Sandbox(props){
    const commit=[
        {
            title:"每日一练",
            color:"#1E90FF",
            number:"33",
            topic:"搜索旋转排序数组",
            typetext:"数据结构",
            content:"解题思路 找不到背包问题了。就拿这道题练手了。还好比较顺利 跳(n)的方案数=『跳(n-1）的方案数』+『跳(n-2)的方案数』 比如跳到第5格。有“两种”方法，从第4格往上跳1格，或者从第3格往上跳2格，这个时候的方案数其实就是 到3和 到4的方案数的和。dp数组存储到对应位置的跳跃方案数。",
            account:"681",
            passRate:"37.4%",
            diffect:"中等",
            colors:"#FFA500"
            
        },
        {
            title:"每日一测",
            color:"#2E8B57",
            number:"13",
            topic:"Java工程师软件设计",
            typetext:"Java编程",
            content:"1.在下面的类图中，那个类图中的Order所生成的1.在下面的类图中，那个类图中的Order所生成的1.在下面的类图中，那个类图中的Order所生成的1.在下面的类图中，那个类图中的Order所生成的1.在下面的类图中，那个类图中的Order所生成的1.在下面的类图中，那个类图中的Order所生成的1.在下面的类图中，那个类图中的Order所生成的1.在下面的类图中，那个类图中的Order所生成的",
            account:"367",
            passRate:"45%",
            diffect:"简单",
            colors:"#2E8B57"
            
        },
        {
            title:"每日一练",
            color:"#1E90FF",
            number:"33",
            topic:"搜索旋转排序数组",
            typetext:"数据结构",
            content:"解题思路 找不到背包问题了。就拿这道题练手了。还好比较顺利 跳(n)的方案数=『跳(n-1）的方案数』+『跳(n-2)的方案数』 比如跳到第5格。有“两种”方法，从第4格往上跳1格，或者从第3格往上跳2格，这个时候的方案数其实就是 到3和 到4的方案数的和。dp数组存储到对应位置的跳跃方案数。",
            account:"681",
            passRate:"37.4%",
            diffect:"中等",
            colors:"#FFA500"
            
        }
    ]
    return <QuestionList data={commit}/>
}