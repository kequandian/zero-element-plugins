import React ,{useState}from 'react';
// import { Tooltip} from 'antd';
const check = require('./images/check.png')
const overcheck=require('./images/overcheck.png')

require('./index.less')


/**
 * @param {string} timestamp 时间戳
 * @returns
 */

export default function ItemIconAction(props) {
    const text = <span>完成</span>;
    const { update_time } = props
    const [onClick,setOnClick]=useState(false)
    const [display,setDisplay]=useState(null)
    const [onHover, setOnHover] = useState(false);
    const [ theImageUrl, setTheImageUrl ] = useState(check)

    const toggleHover=()=>{
        const result =!onHover;
        setTheImageUrl(result? overcheck:check)
        setOnHover(result)
    }
    const toggleOnclick=()=>{
        const result =!onClick;
        setDisplay(result ? "none":null)
        setOnClick(result)
        // console.log("11111"+result+display)
    }
    
    return (
        <div className="TheFinish">
            <div className="TheTime">{update_time}</div>
            
            {/* <Tooltip placement="top" title={text}>
                <div onClick={()=>toggleOnclick(false)} className="TheImage" style={{
                    backgroundImage: `url(${theImageUrl})`
                }}
                onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}>
                </div>
            </Tooltip> */}
        </div>
    )
    
}