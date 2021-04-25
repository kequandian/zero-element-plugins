import React,{useState,useEffect} from 'react'
import { AutoLayout } from 'zero-element-boot/lib/components';
import QuestionItem from '@/plugins/QuestionList/QuestionItem'
const promiseAjax=require('../../../lib/utils/request')

export default function QuestionList(props){
    const {items}=props
    const api='/api/QuestionList'
    const [data,setData]=useState([]);
    function handleQuery(API,queryData){
        return promiseAjax(API,queryData).then(response=>{
            if(response && response.code==200){
                setData(response.data)
            }
        })
    }
    useEffect(_=>{
        handleQuery(api);
    },[])
    const config={
        items: items ? items : (data.length > 0 ? data : []),
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