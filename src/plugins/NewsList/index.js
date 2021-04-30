import React from 'react'
import NewsItem from '@/plugins/NewsList/NewsItem'
import { AutoLayout } from 'zero-element-boot/lib/components'

export default function NewsList(props){
    const commit=[
        {
            title:"【经营业务】",
            subtitle:"花样年一季度累计合约销售人民币45.45亿，同比增幅21"
        },
        {
            title:"【经营业务】",
            subtitle:"花样年一季度累计合约销售人民币45.45亿，同比增幅21"
        },
        {
            title:"【经营业务】",
            subtitle:"花样年一季度累计合约销售人民币45.45亿，同比增幅21"
        }
    ]
    const config={
        layout:{
            xname:"Flexbox",
            props:{
                align:"start",
                direction:"column",
                justify:"start"
            },
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        title:"title",
                        subtitle:"subtitle"
                    }
                }
            },
            cart:{
                xname:"ItemCart",
                props:{
                }
            },
            container:"PlainList"            
        },
        items:commit
    }
    return (
        <AutoLayout  {...config}>
            <NewsItem />
        </AutoLayout>
    )
}