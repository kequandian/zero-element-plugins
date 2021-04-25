import React from 'react'
import TheTitle from '@/plugins/QuestionList/QuestionItem/components/TheTitle'
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
                align:"between",
                direction:"row",
                justify:"between row"
            },
            children:[
                {
                    presenter:"TheTitle",
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
                    presenter:"TypeText",
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
        <div style={{width:"480px"}}>
            <AutoComponent  {...config} allComponents={allComponents}/>
        </div>
    )
}