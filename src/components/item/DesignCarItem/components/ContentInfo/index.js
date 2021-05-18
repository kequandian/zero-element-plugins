import React from 'react';
import ItemAvator from '@/components/presenter/item/ItemAvator';
import ContentText from  '@/components/item/DesignCarItem/components/ContentText'
import { AutoComponent } from 'zero-element-boot';


export default function Content(props){

    const allComponents={    
        ItemAvator,    
        ContentText
    };
    const config={
        layout:{
            xname:'Flexbox',
            props:{
                align:"start",             
            },
            children:[
                {
                    presenter:'ItemAvator',
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                logo:'url',
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
                                title:"title"
                            }
                        }
                    }
                },
            ]
        },
        ...props,
    }
    return (
        <AutoComponent {...config} allComponents={allComponents} />
    )

}