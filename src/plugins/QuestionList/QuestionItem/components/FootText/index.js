import React from 'react'
import Account from '@/plugins/QuestionList/QuestionItem/presenter/Account'
import PassRate from '@/plugins/QuestionList/QuestionItem/presenter/PassRate'
import { AutoComponent} from 'zero-element-boot/lib/components';
import Diffect from '@/plugins/QuestionList/QuestionItem/presenter/Diffect'

export default function FootText(props){
    const allComponents={
        Account,
        PassRate,
        Diffect
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
                    presenter:"Account",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                account:"account"
                            }
                        }
                    }
                },
                {
                    presenter:"PassRate",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                passRate:"passRate"
                            }
                        }
                    }
                },
                {
                    presenter:"Diffect",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
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