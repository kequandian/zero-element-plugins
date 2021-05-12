import React from 'react';
require('./index.less')
import {AutoComponent} from 'zero-element-boot/lib/components';

import ItemTitle from '@/components/presenter/item/ItemTitle'
import ItemSubtitle from '@/components/presenter/item/ItemSubtitle'
// const presenter =require('@/plugins/GenericListItem/LogoSubtitleItem/presenter/ContentText')

// import layout from '@/plugins/TodoList/designLayout';

/**
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @returns
 */

 
export default function ContentText(props){
    const allComponents={
        ItemTitle,
        ItemSubtitle
    }
    const config={
        layout:{
            xname:'Flexbox',
            props:{
                align:"column"
            },
            children:[
                {
                    presenter:"ItemTitle",
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
                    presenter:"ItemSubtitle",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                description:"content"
                            }
                        }
                    }
                }
            ]
        },
        ...props,
    }
    return (
        // <div className="Content_text">
            <AutoComponent {...config} allComponents={allComponents} setClick={false}/>
        // </div>
    )
}


