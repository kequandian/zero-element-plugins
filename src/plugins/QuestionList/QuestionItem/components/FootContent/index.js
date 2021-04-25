import React from 'react'
import FootText from '@/plugins/QuestionList/QuestionItem/components/FootText'
import { AutoComponent} from 'zero-element-boot/lib/components';
import TodoTest from '@/plugins/QuestionList/QuestionItem/presenter/TodoTest'

export default function FootContent(props){
    const allComponents={
        FootText,
        TodoTest
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
                    presenter:"FootText",
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
    return <AutoComponent {...config} allComponents={allComponents}/>
}