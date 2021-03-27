import React from 'react';
// import BigBox from '@/plugins/NewDemo/BigBox';
import { AutoLayout } from 'zero-element-boot';
import ExampleTwo from "@/plugins/NewDemo/ExampleTwo"
import layout from './newLayout';
require('./Example_two.less')

export default function ExampleComment(props){
    // console.log(props)
    const comment=[
        {
            imgUrl:"https://img.36krcdn.com/20201224/v2_0859a3ca4ddb49b4b8ff878270f07942_img_png",
            title:"不要对地产股心存幻想#36氪未来君#",
            theText:"过去一个月，资本市场发生了一个非常奇特的现象。大家买了很长时间的茅台、科技等股票的觉得估值太高了，要买低估值的股票，因此开始买地产买银行的股票。于是很多人就赔钱了。        大家都会觉得很疑惑：为什么银行地产股在估值这么低的情况下，价格增长的持续性会如此之差。银行地产到底是不是真正的低估值？ 其实背后的原因是，银行和地产代表了人类历史上最严重的产能过剩。",
            time:"2020-12-25 10:53",
            adType:"商业哲学"
        },
        {
            imgUrl:"https://img.36krcdn.com/20201224/v2_0859a3ca4ddb49b4b8ff878270f07942_img_png",
            title:"「趣体验」OPPO Reno5 Pro+ 艺术家限定版上手：敲两下，就变色#36氪未来君#",
            theText:"过去一个月，资本市场发生了一个非常奇特的现象。大家买了很长时间的茅台、科技等股票的觉得估值太高了，要买低估值的股票，因此开始买地产买银行的股票。于是很多人就赔钱了。        大家都会觉得很疑惑：为什么银行地产股在估值这么低的情况下，价格增长的持续性会如此之差。银行地产到底是不是真正的低估值？ 其实背后的原因是，银行和地产代表了人类历史上最严重的产能过剩。",
            time:"2020-12-25 10:53",
            adType:"商业哲学"
        },
        {
            imgUrl:"https://img.36krcdn.com/20201224/v2_0859a3ca4ddb49b4b8ff878270f07942_img_png",
            title:"不要对地产股心存幻想#36氪未来君#",
            theText:"过去一个月，资本市场发生了一个非常奇特的现象。大家买了很长时间的茅台、科技等股票的觉得估值太高了，要买低估值的股票，因此开始买地产买银行的股票。于是很多人就赔钱了。        大家都会觉得很疑惑：为什么银行地产股在估值这么低的情况下，价格增长的持续性会如此之差。银行地产到底是不是真正的低估值？ 其实背后的原因是，银行和地产代表了人类历史上最严重的产能过剩。",
            time:"2020-12-25 10:53",
            adType:"商业哲学"
        }
    ]

    const config = {
        items: comment,
        layout: layout,
    };
    // console.log(comment)
    //<ExampleTwo {...comment}/>
    return (
        <AutoLayout {...config}>
            <ExampleTwo />
        </AutoLayout>
    )
}