import React from 'react'
import TheTitle from '@/plugins/QuestionList/QuestionItem/presenter/TheTitle'
import TypeText from '@/plugins/QuestionList/QuestionItem/presenter/TypeText'
import { AutoComponent} from 'zero-element-boot/lib/components';

export default function HeadText(props){
    const allComponents={
        TheTitle,
        TypeText
    }
    const config={
        layout:{
            xname:"Flexbox",
            props:{
                align:"start",
                direction:"row",
                justify:"between row"
            },
            children:[
                {
                    persenter:"TheTitle",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                number:"number",
                                topic:"topic"
                            }
                        }
                    }
                },
                {
                    persenter:"TypeText",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                typetext:"typetext"
                            }
                        }
                    }
                }
            ]
        },
        ...props
    }
    return (
        <AutoComponent  {...config} allComponents={allComponents}/>
    )
}