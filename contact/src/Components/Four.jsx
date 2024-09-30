import React, { useState } from 'react'

function Four() {
  const images = [
    <div key={0} className='four'>
      <img src="https://static.zohocdn.com/ecommerce/stock-images/images/zpstock-image-1011.jpg" alt="" className='f1' />
        <img src="https://static.zohocdn.com/ecommerce/stock-images/images/zpstock-image-1012.jpg" alt="" className='f2' />
         <h3>The best barber team in town! Jazz Man Barber has professional recommendations, classic suggestions, great interiors, and amazingly talented barbers. I love this place</h3>
          <div className='dot'>
            <button className='d1' onClick={()=>{setindex(0)}}></button>
            <button className='d2' onClick={()=>{setindex(1)}}></button>
            <button className='d3' onClick={()=>{setindex(2)}} ></button>
          </div>
    </div>,
    <div key={1} className="four">
    <img src="https://static.zohocdn.com/ecommerce/stock-images/images/zpstock-image-1011.jpg" alt="" className='f1' />
        <img src="https://static.zohocdn.com/ecommerce/stock-images/images/zpstock-image-1012.jpg" alt="" className='f2' />
         <h3>I best barber team in town! Jazz Man Barber has professional recommendations, classic suggestions, great interiors, and amazingly talented barbers. I love this place</h3>
          <div className='dot'>
            <button className='d1' onClick={()=>{setindex(0)}}></button>
            <button className='d2' onClick={()=>{setindex(1)}}></button>
            <button className='d3' onClick={()=>{setindex(2)}} ></button>
            
          </div>
          
    </div>,
  <div key={2} className="four">
    <img src="https://static.zohocdn.com/ecommerce/stock-images/images/zpstock-image-1011.jpg" alt="" className='f1' />
        <img src="https://static.zohocdn.com/ecommerce/stock-images/images/zpstock-image-1012.jpg" alt="" className='f2' />
         <h3>You best barber team in town! Jazz Man Barber has professional recommendations, classic suggestions, great interiors, and amazingly talented barbers. I love this place</h3>
          <div className='dot'>
            <button className='d1' onClick={()=>{setindex(0)}}></button>
            <button className='d2' onClick={()=>{setindex(1)}}></button>
            <button className='d3' onClick={()=>{setindex(2)}} ></button>
          </div>
    </div>,
  ];

  const [index, setindex] = useState(0);
    
  const length= 3;


    const prev = () =>{
            const newlength = index-1;
            setindex(newlength<0 ? length-1 : newlength)
               
    }
    
    const next = () =>{
      const newlength = index+1;
      setindex(newlength>= length ? 0 : newlength)
         
}
  return (
    <div className='our'>
          {/* <button className='p' onClick={prev}>prev</button>
          <button className='n' onClick={next}>next</button> */}
        {images[index]}
    </div>
  )
}

export default Four