import React from 'react'
require('./index.less')

export default function Diffect(props){
    const {diffect,colors}=props
    return (
        <div>
            <div className="Diffect">难度 </div>
            <div className="Diffectily"  style={{color:`${colors}`,display:"inline",margin:"0 0 0 10px"}}>{diffect} </div>
        </div>
    )
}