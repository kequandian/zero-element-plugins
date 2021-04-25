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
                align:"between",
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
                },
                {
                    presenter:"TodoTest",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{

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
            <AutoComponent {...config} allComponents={allComponents}/>
        </div>
        )
}