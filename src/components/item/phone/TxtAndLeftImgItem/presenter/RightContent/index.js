import React from 'react';
require('./index.less')
import {AutoComponent} from 'zero-element-boot/lib/components';

import TitleContent from '../Title'
import ItemSubtitle from '@/components/presenter/item/ItemSubtitle'
// const presenter =require('@/plugins/GenericListItem/LogoSubtitleItem/presenter/ContentText')

// import layout from '@/plugins/TodoList/designLayout';

/**
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @returns
 */

 
export default function RightContent(props){
    const allComponents={
        TitleContent,
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
                    presenter:"TitleContent",
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
        <div style={{flex: 1}}>
            <AutoComponent {...config} allComponents={allComponents}/>
        </div>
    )
}


