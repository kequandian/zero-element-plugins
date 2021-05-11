import { PageGridContainer } from '@/components/container'
import React from 'react'
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox'
import Container from 'zero-element-boot/lib/components/container/Container'
import LogoSubtitleItem from '@/components/item/LogoSubtitleItem'

export default function CompositeList(props){
    const config={
        title:"Title",
        subtitle:"Subtitle",
        timestamp:"昨天",
        url:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav"
    }
    return (
        <PageGridContainer title={"复合组件"} subtitle={"· · ·"} corner={"13px"}>
            <Container>
            <Flexbox align={"start"} direction={"column"}justify={"start"}>
                <LogoSubtitleItem {...config}/>
            </Flexbox>
            </Container>
        </PageGridContainer>
    )
}