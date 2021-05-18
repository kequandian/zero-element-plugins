import React from 'react';
import ItemIconAction from '@/components/presenter/item/ItemIconAction';
import { AutoComponent } from 'zero-element-boot';


export default function Content(props){

    const allComponents={        
        ItemIconAction
    };
    const config={
        layout:{
            xname:'Flexbox',
            props:{
                align:"align-content-center",             
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