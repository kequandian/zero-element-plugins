import React from 'react';
import Title from '@/plugins/TheAdList/TheAdItem/presenter/Title/Title';
import Text from '@/plugins/TheAdList/TheAdItem/presenter/Text/Text'
import { AutoComponent } from 'zero-element-boot';
require('./index.less')

export default function ContentText(props){
    const allComponents={
        Title,
        Text,
    };
    const config={
        layout:{
            xname:'Flexbox',
            props:{
                align:"start",
                direction:"column",
                justidy:"center"
            },
            children:[
                {
                    presenter:"Title",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                title:"title"
                            }
                        }
                    }
                },
                {
                    presenter:"Text",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                text:"text"
                            }
                        }
                    }
                }
            ]

        },
        ...props,
    }
    
    return (
        <div className="Content_text">
            <AutoComponent {...config} allComponents={allComponents}/>
        </div>
    )
}


