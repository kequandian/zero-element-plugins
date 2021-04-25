import React from 'react'
import Title from '@/plugins/QuestionList/QuestionItem/presenter/Title'
import HeadText from '@/plugins/QuestionList/QuestionItem/components/HeadText'
import ContentText from '@/plugins/QuestionList/QuestionItem/presenter/ContentText'
import FootContent from '@/plugins/QuestionList/QuestionItem/components/FootContent'
import { AutoComponent} from 'zero-element-boot/lib/components';

import  Cart from 'zero-element-boot/lib/components/cart/Cart';
require('./index.less')

export default function QuestionItem(props){  
    const {color}=props
    const allComponents={
        Title,
        HeadText,
        ContentText,
        FootContent
    }
    const config={
        layout:{
            xname:"Flexbox",
            props:{
                align:"start",
                direction:"column",
                justify:"start"
            },
            children:[
                {
                    presenter:"Title",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                title:"title",
                                color:"color"
                            }
                        }
                    }
                },
                {
                    presenter:"HeadText",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                number:"number",
                                topic:"topic",
                                typetext:"typetext"                                
                            }
                        }
                    }
                },
                {
                    presenter:"ContentText",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                content:"content"
                            }
                        }
                    }
                },
                {
                    presenter:"FootContent",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                account:"account",
                                passRate:"passRate",
                                diffect:"diffect",
                                colors:"colors"
                            }
                        }
                    }
                }
            ]
        },
        ...props
    }
    return (
        <Cart corner="10px" linewidth="3px 0px 0px 0px" lineColor={color} shadow="0 0 8px #ccc">
            <AutoComponent  {...config} allComponents={allComponents}/> 
        </Cart>
    )
}