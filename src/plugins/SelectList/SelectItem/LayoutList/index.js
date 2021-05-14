import React from 'react'
import {AutoLayout} from 'zero-element-boot/lib/components'
require('./index.less')
import LayoutItem from '@/plugins/SelectList/SelectItem/LayoutList/LayoutItem'
import { PageGridContainer } from '@/components/container'

export default function LayoutList(props){
    const {selectionTwo}=props

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
                            layoutText:"layoutText"
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
            items:selectionTwo
        }
        return (
            <PageGridContainer  bg="#ffffff" showLayoutBorder={true}>
                <AutoLayout {...config}>
                    <LayoutItem />
                </AutoLayout>
            </PageGridContainer>
        )
    }