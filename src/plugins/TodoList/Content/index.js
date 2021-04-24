import React from 'react';
import ItemIconAction from '@/components/presenter/item/ItemIconAction';
import ContentText from  '@/components/item/LogoSubtitleItem/ContentText'
import { AutoComponent } from 'zero-element-boot';


export default function Content(props){

    const allComponents={        
        ContentText,
        ItemIconAction
    };
    const config={
        layout:{
            xname:'Flexbox',
            props:{
                align:"start",                
                direction:"row",
                justify:"between row"
            },
            children:[
                {
                    presenter:"ContentText",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                title:"title",
                                description:"description"
                            }
                        }
                    }
                },
                {
                    presenter:"ItemIconAction",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                update_time:"update_time"
                            }
                        }
                    }
                }
            ]
        },
        ...props,
    }
    return (
        <AutoComponent {...config} allComponents={allComponents} />
    )

}