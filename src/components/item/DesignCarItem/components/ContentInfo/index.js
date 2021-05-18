import React from 'react';
import ItemImage from '@/components/presenter/item/ItemImage';
import ContentText from  '@/components/item/DesignCarItem/components/ContentText'
import { AutoComponent } from 'zero-element-boot';


export default function Content(props){

    const allComponents={    
        ItemImage,    
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
                    presenter:'ItemImage',
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