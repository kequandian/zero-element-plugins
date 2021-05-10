import React from 'react'
import FormList from '@/plugins/FormList'
import SelectContent from '@/plugins/SelectList/SelectItem/SelectContent'
import Demonstration from '@/plugins/Demonstration'
import CompoundList from '@/plugins/SelectList/SelectItem/CompoundList'

import { AutoComponent } from 'zero-element-boot/lib/components'
require('./index.less')


export default function ProjectItem(props){

    const allComponents={
        FormList,
        SelectContent,
        Demonstration,
        CompoundList
    }
    const config={
        layout:{
            xname:"Flexbox",
            props:{
                align:"start",
                direction:"row"
            },
            children:[
                {
                    presenter:"FormList",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                form:"form"
                            }
                        }
                    }
                },
                {
                    presenter:"SelectContent",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                selectionOne:"selectionOne",
                                selectionTwo:"selectionTwo"
                            }
                        }
                    }
                },
                {
                    presenter:"Demonstration",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                demo:"demo"
                            }
                        }
                    }
                },
                {
                    presenter:"CompoundList",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                list:"list"
                            }
                        }
                    }
                }
            ]
        },
        ...props        
    }
    return (
        <div className="ProjectItem">
            <AutoComponent {...config} allComponents={allComponents}/>
        </div>
    )
}