import React, {useState,useEffect } from 'react'
import {AutoLayout} from 'zero-element-boot/lib/components'
import ComponentsItem from '@/plugins/ComponentsList/ComponentsItem'
const promiseAjax=require('../../../lib/utils/request')

export default function ComponentsList(props){
    const api="/api/ComponentsList"
    const [data,setData]=useState([])
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
        layout:{
            xname:"Flexbox",
            props:{
                align:"start",
                direction:"column"
            },
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        title:"title",
                        text:"text"
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
        items:data
    }
    return (
        
        <div className="ComponentsList">
        <AutoLayout {...config}>
            <ComponentsItem />
        </AutoLayout>
        </div>
    )
}