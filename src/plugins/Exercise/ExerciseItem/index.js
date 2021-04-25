import React from 'react'
import ImageAnimation from '@/plugins/Exercise/ExerciseItem/presenter/ImageAnimation'
import ContentText from '@/plugins/Exercise/ExerciseItem/presenter/ContentText'
import ItemTitle from '@/plugins/Exercise/ExerciseItem/presenter/ItemTitle'
import { AutoComponent} from 'zero-element-boot/lib/components';


export default function ExerciseItem(props){
    const allComponents={
        ImageAnimation,
        ContentText,
        ItemTitle
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
                    presenter:"ImageAnimation",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                url:"url"
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
                                logo:"logo",
                                appname:"appname"
                            }
                        }
                    }
                },
                {
                    presenter:"ItemTitle",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                title:"title"
                            }
                        }
                    }
                }
            ]
        },
        ...props
    }
    return (
        <AutoComponent {...config} allComponents={allComponents} />
    )

}