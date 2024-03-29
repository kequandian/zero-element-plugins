import React from 'react'
import ItemLogo from '@/pages/Exercise/ExerciseItem/presenter/ItemLogo';
import AppName from '@/pages/Exercise/ExerciseItem/presenter/AppName';
import { AutoComponent} from 'zero-element-boot/lib/components';

export default function ContentText(props){
    const allComponents={
        ItemLogo,
        AppName
    };
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
                    presenter:"ItemLogo",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                logo:"logo"
                            }
                        }
                    }
                },
                {
                    presenter:"AppName",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                appname:"appname"
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