import React,{forwardRef, useState } from 'react';


export default forwardRef(function PageCart(props, ref){


    const {margin='0 auto',backgroundColor='#cacaac' ,children,width='100%',height='1000px'}=props
    console.log(children)

    const [onHover, setOnHover] = useState(false);
    // const [onDisplay ,setOnDisplay]=useState(true)
    const toggleHover = () => {
      const result = !onHover;
      setOnHover(result)
    }
    // const toggleDisplay = () => {
    //   const result = !onDisplay;
    //   setOnDisplay(result)
    // }
    // let theDisplay="block";
    // if(onDisplay){
    //   theDisplay="none";
    // }else{
    //   theDisplay="block";
    // }

    let bgColor = `${backgroundColor}80`;
    if (onHover) {
      bgColor = `${backgroundColor}ff`;
    } else {
      bgColor = `${backgroundColor}80`;
    }
    
      return React.Children.map(children, child => {
        return <div style={{
          margin: `${margin}`,
          backgroundColor: `${backgroundColor}`,
          width:`${width}`,
          height:`${height}`,
        }}
        
      onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
        >
          {child}
        </div>
      })
    })