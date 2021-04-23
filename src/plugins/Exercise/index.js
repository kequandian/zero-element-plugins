import React from 'react'
import { AutoLayout } from 'zero-element-boot/lib/components';
import ExerciseItem from '@/plugins/Exercise/ExerciseItem'

export default function Exercise(props){
    const commit=[
        {
            url:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB18wViw",
            logo:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
            appname:"东方头条",
            title:"美团、京东的最大股东都是它？投资了800多家企业，70多家已上市"
        },
        {
            url:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB18wViw",
            logo:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
            appname:"东方头条",
            title:"美团、京东的最大股东都是它？投资了800多家企业，70多家已上市"
        },
        {
            url:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB18wViw",
            logo:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
            appname:"东方头条",
            title:"美团、京东的最大股东都是它？投资了800多家企业，70多家已上市"
        }
    ]
    const config={
        items: commit,
        layout:{
            xname:"Flexbox",
            props:{
                align:"start",
                direction:"row",
                justify:"start"
            },
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        url:"url",
                        logo:"logo",
                        appname:"appname",
                        title:"title"
                    }
                }
            },
            cart:{
                xname:"HoverShadowCart",
                props:{
                    padding:"0",
                    fill:"#00000f",
                    corner:"15px 15px 0 0"
                }
            },
            container:"PlainList"
        }
    }
    return (
    <AutoLayout {...config}>
        <ExerciseItem />
    </AutoLayout>)
}