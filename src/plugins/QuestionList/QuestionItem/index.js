import React from 'react'
import Title from '@/plugins/QuestionList/QuestionItem/presenter/Title'
import HeadText from '@/plugins/QuestionList/QuestionItem/components/HeadText'
import ContentText from '@/plugins/QuestionList/QuestionItem/presenter/ContentText'
import FootContent from '@/plugins/QuestionList/QuestionItem/components/FootContent'
import { AutoComponent} from 'zero-element-boot/lib/components';
require('./index.less')

export default function QuestionItem(props){    
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
    <div className="Bigbox" style={{borderTop:""}}>
        <AutoComponent  {...config} allComponents={allComponents}/> 
    </div>
    )
}