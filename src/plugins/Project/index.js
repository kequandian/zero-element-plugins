import React from 'react'
import { AutoLayout } from 'zero-element-boot/lib/components'
import ProjectItem from '@/plugins/Project/ProjectItem'


export default function Project(props){
    const commit=[
        {
            form:[
                    {
                        title:"头像组件",
                        account:"3"
                    },
                    {
                        title:"标题组件",
                        account:""
                    },
                    {
                        title:"副标题组件",
                        account:"1"
                    }
            ],
            select:[
                {
                    title:"Cart",
                    cart:[
                        {
                            text:"Corner"
                        },
                        {
                            text:"HoverShadowCart"
                        },
                        {
                            text:"SelectedCart"
                        }
                    ]
                },
                // {
                //     title:"Layout",
                //     layout:[
                //         {
                //             text:"Flexbox"
                //         },
                //         {
                //             text:"Itembox"
                //         },
                //         {
                //             text:"SelectBox"
                //         }
                //     ]
                // }        
            ],
            demo:"123",
            // list:[
            //     {
            //         title:"复合组件",
            //         content:[
            //             {
            //                 text:"Corner"
            //             },
            //             {
            //                 text:"HoverShadowCart"
            //             },
            //             {
            //                 text:"SelectedCart"
            //             }
            //         ]
            //     }
            // ]
        }
    ]
    const config={
        layout:{
            xname:"Itembox",
            props:{
                align:"start",
                direction:"row"
            },
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        form:"form",
                        select:"select",
                        demo:"demo",
                        list:"list"
                    }
                }
            },
            cart:{
                xname:"ItemCart",
                props:{

                }
            },
            container:"SelectionList"
        },
        items:commit
    }
    return (
        <AutoLayout {...config}>
            <ProjectItem />
        </AutoLayout>
    )
}