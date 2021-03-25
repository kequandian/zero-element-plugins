import React from 'react';
require('./Example_two.less')

export default function ExampleComment(){
    const comment={
        imgUrl:"https://img.36krcdn.com/20201224/v2_0859a3ca4ddb49b4b8ff878270f07942_img_png",
        title:"不要对地产股心存幻想#36氪未来君#",
        text:"过去一个月，资本市场发生了一个非常奇特的现象。大家买了很长时间的茅台、科技等股票的觉得估值太高了，要买低估值的股票，因此开始买地产买银行的股票。于是很多人就赔钱了。        大家都会觉得很疑惑：为什么银行地产股在估值这么低的情况下，价格增长的持续性会如此之差。银行地产到底是不是真正的低估值？ 其实背后的原因是，银行和地产代表了人类历史上最严重的产能过剩。",
        time:"2020-12-25 10:53",
        adType:"商业哲学"
    }
    
    // console.log(comment.imgUrl);
    // console.log(comment.imgUrl);
    return (
        <div className="BigBox">
            {/* <div className="ExampleImage">
                <img className="theImage"
                    src={comment.imgUrl}
                />
            </div>, */}
            
            <ImageAnimation comment={comment.imgUrl}/>
            {/* <div className="ExampleTitle">
                {comment.title}
            </div>,
            <div className="ExampleText">
                {comment.text}
            </div>, */}
            <TextContent comment={comment}/>
            {/* <div className="ExampleTime">
                <div className="theType">{comment.adType}</div>
                <div className="theTime">{comment.time}</div>
            </div> */}
            <FootContent comment={comment}/>
        </div>
    )
    
    function ImageAnimation(props){
        return(
        <div className="ExampleImage">
            <img className="theImage"
                src={props.comment}
            />
        </div>)
    }
    function TextContent(props){
        return (
            <div>
                <div className="ExampleTitle">
                    {props.comment.title}
                </div>
                <div className="ExampleText">
                    {props.comment.text}
                </div>
            </div>
        )
    }
    function FootContent(props){
        return (
            <div className="ExampleTime">
                <div className="theType">{props.comment.adType}</div>
                <div className="theTime">{props.comment.time}</div>
            </div>
        )
    }
}