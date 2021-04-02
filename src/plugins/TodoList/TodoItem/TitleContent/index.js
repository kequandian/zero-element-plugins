import React from 'react';
import Title from '@/components/presenter/item/ItemTitle';
import Subtitle from '@/components/presenter/item/ItemSubtitle'
require('./index.less')
import {AutoComponent} from 'zero-element-boot/lib/components';
// import layout from '@/plugins/TodoList/designLayout';

/**
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @returns
 */
export default function ContentText(props){
    const allComponents={
        Title,
        Subtitle,
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
                                title:"content"
                            }
                        }
                    }
                },
                {
                    presenter:"Subtitle",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                subtitle:"content"
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


