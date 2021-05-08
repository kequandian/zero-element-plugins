import React from 'react'
import FormList from '@/plugins/FormList'
import SelectList from '@/plugins/SelectList'
// import SelectListComposite from '@/plugins/SelectList/SelectListComposite'
import Demonstration from '@/plugins/Demonstration'
import { AutoComponent } from 'zero-element-boot/lib/components'


export default function ProjectItem(props){
    const allComponents={
        FormList,
        SelectList,
        Demonstration,
        // SelectListComposite
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
                    presenter:"SelectList",
                    gateway:{
                        xname:"Binding",
                        props:{
                            binding:{
                                select:"select"
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
                // {
                //     presenter:"SelectListComposite",
                //     gateway:{
                //         xname:"Binding",
                //         props:{
                //             binding:{
                //                 list:"list"
                //             }
                //         }
                //     }
                // }
            ]
        },
        ...props        
    }
    return <AutoComponent {...config} allComponents={allComponents}/>
}