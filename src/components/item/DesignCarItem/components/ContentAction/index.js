import React from 'react';
import ItemIconAction from '@/components/presenter/item/ItemIconAction';
import ContentText from  '@/components/item/LogoSubtitleItem/components/ContentText'
import { AutoComponent } from 'zero-element-boot';


export default function Content(props){

    const allComponents={        
        ItemIconAction
    };
    const config={
        layout:{
            xname:'Flexbox',
            props:{
                align:"start",             
            },
            children:[
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