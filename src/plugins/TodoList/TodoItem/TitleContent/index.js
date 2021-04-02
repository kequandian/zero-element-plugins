import React from 'react';
require('./index.less')
import {AutoComponent} from 'zero-element-boot/lib/components';
const presenter =require('@/plugins/TodoList/TodoItem/presenter/ContentText')
// import layout from '@/plugins/TodoList/designLayout';

/**
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @returns
 */
export default function ContentText(props){
    const allComponents={...presenter}
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


