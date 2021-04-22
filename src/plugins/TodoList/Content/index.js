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
                                subtitle:"description"
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
                                timestamp:"timestamp"
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