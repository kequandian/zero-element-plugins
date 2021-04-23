import React from 'react'
import Title from '@/plugins/QuestionList/QuestionItem/presenter/Title'
import HeadText from '@/plugins/QuestionList/QuestionItem/presenter/HeadText'
import ContentText from '@/plugins/QuestionList/QuestionItem/presenter/ContentText'
import FootContent from '@/plugins/QuestionList/QuestionItem/presenter/FootContent'
import { AutoComponent} from 'zero-element-boot/lib/components';

export default function QuestionItem(props){    
    console.log(props)
    const allComponents={
        Title,
        // HeadText,
        // ContentText,
        // FootContent
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
                    persenter:"Title",
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
                // {
                //     persenter:"HeadText",
                //     gateway:{
                //         xname:"Binding",
                //         props:{
                //             binding:{
                //                 number:"number",
                //                 topic:"topic",
                //                 typetext:"typetext"                                
                //             }
                //         }
                //     }
                // },
                // {
                //     persenter:"ContentText",
                //     gateway:{
                //         xname:"Binding",
                //         props:{
                //             binding:{
                //                 content:"content"
                //             }
                //         }
                //     }
                // },
                // {
                //     persenter:"FootContent",
                //     gateway:{
                //         xname:"Binding",
                //         props:{
                //             binding:{
                //                 account:"account",
                //                 passRate:"passRate",
                //                 diffect:"diffect",
                //                 colors:"colors"
                //             }
                //         }
                //     }
                // }
            ]
        },
        ...props
    }
    return <AutoComponent  {...config} allComponents={allComponents}/> 
}