import React from 'react'
import Title from '@/plugins/NewsList/NewsItem/Title'
import Subtitle from '@/plugins/NewsList/NewsItem/Subtitle'
import { AutoComponent } from 'zero-element-boot/lib/components'

export default function NewsItem(props){
    const {data}=props
   const allComponents={
       Title,Subtitle
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
       items:data
   }
   return <AutoComponent {...config} allComponents={allComponents}/>
}