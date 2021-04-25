import React from 'react'
import { AutoLayout } from 'zero-element-boot/lib/components';
import QuestionItem from '@/plugins/QuestionList/QuestionItem'
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';

export default function QuestionList(props){
    const api='/api/QuestionList'
    const [data]=useTokenRequest({api,bindFiles})
    
    // const {data}=props
    
    const config={
        items:data,
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
                        title:"title",
                        color:"color",
                        number:"number",
                        topic:"topic",
                        typetext:"typetext",
                        content:"content",
                        account:"account",
                        passRate:"passRate",
                        diffect:"diffect",
                        colors:"colors"
                    }
                }
            },
            cart:{
                xname:"ItemCart",
                props:{

                }
            },
            container:"PlainList"
        }
    }
    
    return(
        <AutoLayout {...config}>
            <QuestionItem />
        </AutoLayout>
    )
}