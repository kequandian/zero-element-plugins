import React from 'react'
import Number from '@/plugins/QuestionList/QuestionItem/presenter/Number'
import Topic from '@/plugins/QuestionList/QuestionItem/presenter/Topic'
import { AutoComponent} from 'zero-element-boot/lib/components';

export default function TheTitle(props){
    const allComponents={
        Number,
        Topic
    }
    const config={
        layout:{
            xname:"Flexbox",
            props:{
                align:"start",
                direction:"row",
                justify:"start"
            },
            children:[
                {
                    presenter:"Number",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                number:"number"
                            }
                        }
                    }
                },
                {
                    presenter:"Topic",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                topic:"topic"
                            }
                        }
                    }
                }
            ]
        },
        ...props
    }
    return (
        <AutoComponent {...config} allComponents={allComponents}/>
    )
}