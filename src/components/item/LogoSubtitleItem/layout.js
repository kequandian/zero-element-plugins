module.exports={
    xname:'Flexbox',
    props:{
        align:'start',
        direction:'row',
        justify:'start row'
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
            presenter:'Content',
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        title:"title",
                        subtitle:"description",
                        timestamp:"update_time"
                    }
                }
            }
        }
    ]
}